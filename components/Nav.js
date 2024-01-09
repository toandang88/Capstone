import html from "html-literal";
import logo from "../assets/img/icons/thundertalk.png";
import cart from "../assets/img/icons/cart.png";
import logoutIcon from "../assets/img/logout.png";
import nav from "../store/Nav.js";

export default links => html`
  <div class="menu-wrapper">
    <div class="menu_container">
      <a><img id="img_logo" src=${logo}/></a>
      <a href="/"><img id="img_logout" src=${logoutIcon}/></a>
      <nav>
        <i class="fa-sharp fa-solid fa-bars fa-xl" style="color: #6d9cee;"></i>
        <div class="hidden_mobile highlight" id="menu">
          ${links
            .map(
              link =>
                `<div><a class="menu" id="lnk_home" href="/${link.title}" data-navigo>${link.text}</a></div>`
            )
            .join("")}
        </div>
      </nav>
      <div class="weatherContainer">
      ${nav.weather.city} ${nav.weather.temp} ${nav.weather.description}
      </div>
        <div class="cart">
          <a href="/Cart"><div class="cart_count" id="cart_count">0</div><img id="img_cart" src="${cart}"/></a>
        </div>
      </div>
    </div>
  </div>
`;
