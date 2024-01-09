export function loadConfirm(router) {
  document.getElementById("btn_home").addEventListener("click", function() {
    router.navigate("/Home");
  });

  document.getElementById("btn_goGift").addEventListener("click", function() {
    router.navigate("/Gifts");
  });

  sessionStorage.removeItem("cartGift");

  const listName = sessionStorage.getItem("listName");

  document.getElementById("orderNumber").innerText = sessionStorage.getItem(
    "orderNumber"
  );
  document.getElementById("dateTime").innerText = sessionStorage.getItem(
    "dateTime"
  );
  document.getElementById(
    "confirmRecipient"
  ).innerText = sessionStorage.getItem("recipient");
  document.getElementById("products").innerText = listName;
  document.getElementById("total").innerText = `$${sessionStorage.getItem(
    "total"
  )}`;
  document.getElementById("confirmAddress").innerText = sessionStorage.getItem(
    "shippingAddress"
  );
  document.getElementById("confirmPhone").innerText = sessionStorage.getItem(
    "phone"
  );
  document.getElementById("confirmEmail").innerText = sessionStorage.getItem(
    "email"
  );
}
