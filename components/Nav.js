import html from "html-literal";
import logo from "../assets/img/icons/thundertalk.png";
import cart from "../assets/img/icons/cart.png";
export default links => html`
  <div class="menu_container">
    <a href="/Home"><img id="img_logo" src=${logo}/></a>
    <nav id="nav_bar">
      <i class="fa-sharp fa-solid fa-bars fa-xl" style="color: #6d9cee;"></i>
      ${links
        .map(
          link =>
            `<div class="hide_small_screen td_highlight"><a class="menu" id="lnk_home" href="/${link.title}" data-navigo>${link.text}</a></div>`
        )
        .join("")}
    </nav>
    <div class="cart">
      <a href="/Cart"><img id="img_cart" src="${cart}"/></a>
    </div>
  </div>
`;
