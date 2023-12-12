import { loadTXTContent } from "./common.js";
window.loadMenu();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});

document.getElementById("btn_login").addEventListener("submit", event => {
  event.preventDefault();
  window.location.href = "../pages/roomchat.html";
});
