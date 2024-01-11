import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
const app = express();
const PORT = process.env.BACKEND_API_URL || 3000;
const generateMessage = text => ({
  text,
  sentAt: new Date().getTime()
});

export default function chat() {
  const httpServer = createServer(app);
  // const io = new Server(httpServer, {
  //   cors: {
  //     origin: `${process.env.FRONTEND_URL}`,
  //     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //     preflightContinue: false,
  //     optionsSuccessStatus: 204,
  //     allowedHeaders: [
  //       "X-Requested-With,content-type, Accept,Authorization,Origin"
  //     ]
  //   }
  // });
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
      allowedHeaders: [
        "X-Requested-With,content-type, Accept,Authorization,Origin"
      ]
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

  // const PORT = process.env.BACKEND_API_URL || 4041;
  // server.listen(PORT, () => {
  //   console.log(`WebSocket server is listening on port ${PORT}`);
  // });
}
