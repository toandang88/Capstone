import * as common from "./common.js";

window.loadMenu();

document.getElementById("btn_buy").addEventListener("click", function() {
  window.location.href = "../pages/confirm.html";
});

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});
