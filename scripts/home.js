import { loadTXTContent } from "./common.js";
window.loadMenu();

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});
