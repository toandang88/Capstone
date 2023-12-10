import { loadTXTContent } from "./common.js";
window.loadMenu();

const agreementPath = "/docs/userAgreement.txt";

// Get the span element
const agreementElement = document.getElementById("box_agreementContent");

loadTXTContent(agreementPath, agreementElement);

//Disable Navigation
const navBar = document.getElementById("nav_bar");

if (navBar) {
  navBar.classList.add("disable-div");
  navBar.style.pointerEvents = "none";
  navBar.style.opacity = "30%";
}

// Handle agree button
const btnAgree = document.getElementById("btn_agree");

if (btnAgree) {
  btnAgree.addEventListener("click", function() {
    window.location.href = "/pages/home.html";
  });
}

function clearAddBodyContent(newBodyContent) {
  const body = document.body;
  body.innerHTML = ""; //Clear current content

  loadTXTContent(newBodyContent, body);
}

const btnDisAgree = document.getElementById("btn_disAgree");
if (btnDisAgree) {
  btnDisAgree.addEventListener("click", function() {
    const newContent = "/docs/comeback.txt";
    clearAddBodyContent(newContent);
  });
}
