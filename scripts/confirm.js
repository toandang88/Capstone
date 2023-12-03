import { loadTXTContent } from "./common.js";

const confirmationContentPath = "/docs/confirmation.txt";
window.loadMenu();
// Get the span element
const confirmationContentElement = document.getElementById(
  "lbl_confirmContent"
);

loadTXTContent(confirmationContentPath, confirmationContentElement);
