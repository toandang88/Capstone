import agreementPath from "../assets/docs/userAgreement.js";

export function agreementFunctions() {
  if (agreementPath) {
    // Get the span element
    const agreementElement = document.getElementById("box_agreementContent");
    agreementElement.innerHTML = agreementPath;
  }

  const btnAgree = document.getElementById("btn_agree");
  if (btnAgree) {
    btnAgree.addEventListener("click", function() {
      window.location.href = "/Login";
    });
  }

  const btnDisAgree = document.getElementById("btn_disAgree");
  if (btnDisAgree) {
    btnDisAgree.addEventListener("click", function() {
      window.location.href = "/Comeback";
    });
  }
}
