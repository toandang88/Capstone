import { io } from "socket.io-client";
import dotenv from "dotenv";
dotenv.config().parsed;

// const socket = io(process.env.BACKEND_API_URL || 4040, { autoConnect: false });
export function chat(username) {
  const socket = io(process.env.BACKEND_API_URL || 4040, {
    auth: {
      serverOffset: 0
    }
  });
  const chatContainer = document.getElementById("chatContentContainer");
  const messages = document.getElementById("msg");
  const form = document.getElementById("msgForm");
  const input = document.getElementById("chatInput");

  socket.on("join", () => {
    socket.emit("getPreviousMessages");
  });

  socket.on("previousMessages", previousMessages => {
    previousMessages.forEach(msg => {
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "messageContainer");
      messages.appendChild(itemContainer);

      const item = document.createElement("div");
      item.setAttribute("class", "message_box");
      item.textContent = msg;
      messages.appendChild(item);
    });
    chatContainer.scrollTop = messages.scrollHeight;
  });
  // Send the username to the server when connecting
  socket.on("connect", () => {
    socket.emit("join", { username });
  });

  // Handle incoming messages
  socket.on("message", (msg, serverOffset) => {
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "messageContainer");
    messages.appendChild(itemContainer);
    const item = document.createElement("div");
    item.setAttribute("class", "message_box");
    item.textContent = msg.text;
    messages.appendChild(item);
    chatContainer.scrollTop = messages.scrollHeight;
    socket.auth.serverOffset = serverOffset;
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server. Attempting to reconnect...");
    setTimeout(() => {
      // Reconnect after a delay
      socket.connect();
    }, 2000); // Adjust the delay as needed
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const inputList = event.target.elements;
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();

    const inputValue = `${username}(${formattedDateTime}): ${input.value}`;
    if (input.value) {
      socket.emit("message", inputValue, error => {
        if (error) {
          return console.log(error);
        }
      });
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "userMessageContainer");
      messages.appendChild(itemContainer);
      const item = document.createElement("div");
      item.setAttribute("class", "message_user");
      item.textContent = inputList.chatInput.value;
      itemContainer.appendChild(item);
      input.value = "";
      input.focus();
      chatContainer.scrollTop = messages.scrollHeight;
    }
  });
}
