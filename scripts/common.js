export function loadTXTContent(path, element) {
  // Fetch the text file
  fetch(path)
    .then(response => response.text())
    .then(textContent => {
      // Set the text content of the span element
      element.innerHTML = textContent;
    })
    .catch(error => {
      console.error("Error loading text file:", error);
    });
}

window.loadMenu = function() {
  const onloadBody = document.body;
  if (onloadBody) {
    const menu = document.createElement("div");

    menu.innerHTML = `
    <div id="nav_bar">
      <table id="tbl_menu">
        <tr>
          <td>
            <a href="home.html"><img id="img_logo" src="/img/icons/thundertalk.png"></a>
          </td>
          <td>
            <div><a class="menu" id="lnk_home" href="home.html">Home</a></div>
          </td>
          <td>
            <div><a class="menu" id="lnk_wall" href="wall.html">Wall</a></div>
          </td>
          <td>
            <div><a class="menu" id="lnk_profile" href="profile.html">Profile</a></div>
          </td>
          <td>
            <div><a class="menu" id="lnk_gift" href="gifts.html">Gift Shop</a></div>
          </td>
          <td>
            <div><a class="menu" id="lnk_order" href="order.html">Order</a></div>
          </td>
          <td>
            <div><a class="menu" id="lnk_about" href="about.html">About</a></div>
          </td>
          <td>
            <div><a class="menu" href="contact.html">Contact</a></div>
          </td>
          <td>
            <img id="img_cart" src="/img/icons/cart.png">
          </td>
        </tr>
      </table>
    </div>
    `;

    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
      <div id="lbl_copyright">Copyright © 2023 Toan Dang. All Rights Reserved.</div>
    `;
    onloadBody.appendChild(menu);
    onloadBody.appendChild(footer);
  }
};
