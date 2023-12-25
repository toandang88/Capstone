export function login() {
  document.getElementById("submit_login").addEventListener("submit", event => {
    event.preventDefault();
    window.location.href = "/Home";
  });
}
