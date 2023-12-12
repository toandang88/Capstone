import { loadTXTContent } from "./common.js";

const confirmationContentPath = "/docs/confirmation.txt";
window.loadMenu();
// Get the span element
const confirmationContentElement = document.getElementById(
  "lbl_confirmContent"
);

loadTXTContent(confirmationContentPath, confirmationContentElement);
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});

document.getElementById("btn_home").addEventListener("click", function() {
  window.location.href = "../pages/home.html";
});

document.getElementById("btn_goGift").addEventListener("click", function() {
  window.location.href = "../pages/gifts.html";
});
