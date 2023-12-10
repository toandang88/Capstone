import { loadTXTContent } from "./common.js";

const confirmationContentPath = "/docs/contact.txt";

window.loadMenu();

// Get the span element
const confirmationContentElement = document.getElementById("lbl_contact");

loadTXTContent(confirmationContentPath, confirmationContentElement);

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});
