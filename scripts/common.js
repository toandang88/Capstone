export function loadTXTContent(path, element) {
  if (path != null) {
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
}

// window.loadMenu = function() {
//   const onloadBody = document.body;
//   if (onloadBody) {
//     const menu = document.createElement("div");
//     menu.className = "menu_container";

//     menu.innerHTML = `
//     <a href="home.html"><img id="img_logo" src="/img/icons/thundertalk.png"></a>
//     <nav id="nav_bar">
//     <i class="fa-sharp fa-solid fa-bars fa-xl" style="color: #6d9cee;"></i>
//       <table class="tbl_menu">
//         <tr>
//           <td class="hide_small_screen td_highlight">
//             <div><a class="menu" id="lnk_home" href="home.html">Home</a></div>
//           </td>
//           <td class="hide_small_screen td_highlight">
//             <div><a class="menu" id="lnk_profile" href="profile.html">Profile</a></div>
//           </td>
//           <td class="hide_small_screen td_highlight">
//             <div><a class="menu" id="lnk_gift" href="gifts.html">Gift Shop</a></div>
//           </td>
//           <td class="hide_small_screen td_highlight">
//             <div><a class="menu" id="lnk_about" href="about.html">About</a></div>
//           </td>
//           <td class="hide_small_screen td_highlight">
//             <div><a class="menu" href="contact.html">Contact</a></div>
//           </td>
//         </tr>
//       </table>
//     </nav>
//     <div class="cart">
//       <a href="cart.html"><img id="img_cart" src="/img/icons/cart.png"></a>
//     </div>
//     `;

//     const footer = document.createElement("footer");
//     footer.className = "footer";
//     footer.innerHTML = `
//       <div id="lbl_copyright">Copyright © 2023 Toan Dang. All Rights Reserved.</div>
//     `;
//     onloadBody.appendChild(menu);
//     onloadBody.appendChild(footer);
//   }
// };
