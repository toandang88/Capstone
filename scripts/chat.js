import io from "socket.io-client";
import dotenv from "dotenv";
dotenv.config();

const socket = io(process.env.SOCKETIO_URL) || 4041;
// const socket = io(process.env.API_URL);

export function chat() {
  const messages = document.getElementById("msg");
  const form = document.getElementById("msgForm");
  const input = document.getElementById("chatInput");

  const username = sessionStorage.getItem("username");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("message", msg => {
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "messageContainer");
    messages.appendChild(itemContainer);
    const item = document.createElement("div");
    item.setAttribute("class", "message_box");
    item.textContent = msg.text;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
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
    }
  });
}
