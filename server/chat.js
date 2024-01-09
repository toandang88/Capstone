import { Server } from "socket.io";
import { createServer } from "http";

const PORT = 3000;
const generateMessage = text => ({
  text,
  sentAt: new Date().getTime()
});

export default function chat(app) {
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", socket => {
    console.log("New WebSocket connection");

    socket.emit("message", generateMessage("Welcome to the chat!"));
    socket.broadcast.emit(
      "message",
      generateMessage("A user has joined the chat")
    );

    socket.on("message", message => {
      socket.broadcast.emit("message", generateMessage(message));
    });

    socket.on("disconnect", () => {
      io.emit("message", generateMessage("User has left the chat"));
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`WebSocket server is listening on port ${PORT}`);
  });

  // const PORT = process.env.PORT || 4041;
  // server.listen(PORT, () => {
  //   console.log(`WebSocket server is listening on port ${PORT}`);
  // });
}
