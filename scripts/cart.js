export function cartHandle() {
  const btnDisAgree = document.getElementById("lnk_cancelEdit");
  if (btnDisAgree) {
    btnDisAgree.addEventListener("click", function() {
      window.location.href = "/Gifts";
    });
  }

  const btnConfirm = document.getElementById("cart_userData");
  if (btnConfirm) {
    btnConfirm.addEventListener("submit", event => {
      event.preventDefault();
      //Handle data

      //Navigate to confirm page
      window.location.href = "/Confirm";
    });
  }
}
