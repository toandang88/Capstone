import { loadTXTContent } from "./common.js";

const confirmationContentPath = "/docs/about.txt";
window.loadMenu();
// Get the span element
const confirmationContentElement = document.getElementById("lbl_about");

loadTXTContent(confirmationContentPath, confirmationContentElement);
