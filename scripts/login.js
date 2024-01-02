import agreementPath from "../assets/docs/userAgreement.js";

export function agreementFunctions() {
  if (agreementPath) {
    // Get the span element
    const agreementElement = document.getElementById("box_agreementContent");
    agreementElement.innerHTML = agreementPath;
  }

  const btnDisAgree = document.getElementById("btn_disAgree");
  if (btnDisAgree) {
    btnDisAgree.addEventListener("click", function() {
      window.location.href = "/Comeback";
    });
  }
}
export function login() {
  document.getElementById("submit_login").addEventListener("submit", event => {
    event.preventDefault();
    window.location.href = "/Home";
  });
}

export function checkAgreement() {
  document.addEventListener("DOMContentLoaded", function() {
    const doNotDisplayAgain = localStorage.getItem("doNotDisplayAgain");

    if (doNotDisplayAgain === "true") {
      document.getElementById("ctn_agreement").style.display = "none";
      document.getElementById("lbl_holder").style.display = "flex";
    } else {
      document.getElementById("ctn_agreement").style.display = "flex";
      document.getElementById("lbl_holder").style.display = "none";
      agreementFunctions();
    }

    document.getElementById("btn_agree").addEventListener("click", function() {
      const checkbox = document.getElementById("chk_agreement");
      if (checkbox.checked) {
        localStorage.setItem("doNotDisplayAgain", "true");
      }

      document.getElementById("ctn_agreement").style.display = "none";
      document.getElementById("lbl_holder").style.display = "flex";
    });
  });
}

export function resetCheck(boolean) {
  if (boolean) {
    localStorage.removeItem("doNotDisplayAgain");
  }
}
