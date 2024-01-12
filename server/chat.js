import { Server } from "socket.io";
import { createServer } from "http";
import dotenv from "dotenv";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

dotenv.config();
const PORT = process.env.PORT || 4040;

// open the database file
const dbPromise = open({
  filename: "chat.db",
  driver: sqlite3.Database
});

const generateMessage = text => ({
  text,
  sentAt: new Date().getTime()
});

export default function chat(app) {
  const httpServer = createServer(app);

  const io = new Server(
    httpServer,
    {
      cors: {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
        allowedHeaders: [
          "X-Requested-With,content-type, Accept,Authorization,Origin"
        ]
      }
    },
    { connectionStateRecovery: {} }
  );

  io.on("connection", async socket => {
    console.log("New WebSocket connection");

    // Handle the "join" event to store the username
    socket.on("join", async ({ username }) => {
      socket.username = username;

      // Send a welcome message to the connected user
      socket.emit("message", generateMessage("Welcome to the chat!"));

      // Broadcast a message when a user joins the chat
      socket.broadcast.emit(
        "message",
        generateMessage(`${socket.username} has joined the chat`)
      );

      // Emit the "getPreviousMessages" event to request previous messages
      socket.emit("getPreviousMessages");
    });

    // Broadcast a message when a user leaves the chat
    socket.on("disconnect", () => {
      io.emit(
        "message",
        generateMessage(`${socket.username} has left the chat`)
      );
    });

    // Handle the "message" event when a user sends a message
    socket.on("message", async message => {
      let result;
      try {
        const db = await dbPromise;
        // store the message in the database
        result = await db.run(
          "INSERT INTO messages (content) VALUES (?)",
          message
        );
      } catch (e) {
        return;
      }
      // Broadcast the message to all connected clients
      socket.broadcast.emit("message", generateMessage(message), result.lastID);
    });

    socket.on("getPreviousMessages", async () => {
      try {
        const db = await dbPromise;
        const rows = await db.all("SELECT content FROM messages");

        // Emit the "previousMessages" event with the array of previous messages
        socket.emit(
          "previousMessages",
          rows.map(row => row.content)
        );
      } catch (e) {
        // Handle the error
        console.error("Error retrieving previous messages:", e);
      }
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`WebSocket server is listening on port ${PORT}`);
  });
}
