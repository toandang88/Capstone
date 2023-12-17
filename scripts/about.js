import { loadTXTContent } from "./common.js";

const confirmationContentPath = "/docs/about.txt";
window.loadMenu();

const confirmationContentElement = document.getElementById("lbl_about");

loadTXTContent(confirmationContentPath, confirmationContentElement);
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});
