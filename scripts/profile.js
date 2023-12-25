export function clickEdit() {
  document.getElementById("lnk_edit").addEventListener("click", event => {
    event.preventDefault();
    window.location.href = "/ProfileEdit";
  });
}
