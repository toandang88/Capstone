import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import * as login from "./scripts/login.js";
import * as profile from "./scripts/profile.js";
import * as cart from "./scripts/cart.js";
import * as gifts from "./scripts/gifts.js";
import * as confirm from "./scripts/confirm.js";
import * as home from "./scripts/chat.js";

const router = new Navigo("/");
let username = sessionStorage.getItem("username") || "";
async function getCurrentCity() {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              const currentCity = data.address.city;
              resolve(currentCity);
            })
            .catch(error => {
              console.error("Error fetching location data:", error);
              reject(error);
            });
        },
        function(error) {
          console.error("Error getting geolocation:", error.message);
          reject(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation not supported"));
    }
  });
}

async function getTemp() {
  try {
    let currentCity = await getCurrentCity();

    if (currentCity !== undefined) {
      const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=${currentCity}`;

      const response = await fetch(openWeatherURL);
      const data = await response.json();

      const kelvinToFahrenheit = kelvinTemp =>
        Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

      let temperature = kelvinToFahrenheit(data.main.temp) + "°F";
      let description = data.weather[0].main + " Sky";

      store.Nav.weather = {
        city: data.name,
        temp: temperature,
        description: description
      };
    }
  } catch (error) {
    console.error("Error in getTemp:", error);
  }
}

getTemp();

function render(state = store.Login) {
  document.querySelector("#root").innerHTML = `
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}`;
  router.updatePageLinks();

  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > div").classList.toggle("hidden_mobile");
  });

  //Count for the number of the gift added across pages
  let cartCount = gifts.getCartCount();
  if (cartCount != "") {
    document.getElementById("cart_count").innerText = cartCount;
  } else document.getElementById("cart_count").innerText = 0;

  document.getElementById("img_logout").addEventListener("click", () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("cartGift");
  });

  // Reset for the doNotDisplayAgain checkbox
  // login.resetCheck(true);

  if (state.view === "Login") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("img_cart").style.display = "none";
    document.getElementById("img_logout").style.display = "none";
    document.getElementById("cart_count").style.display = "none";
    login.checkAgreement();
    document
      .getElementById("submit_login")
      .addEventListener("submit", event => {
        event.preventDefault();
        const input = event.target.elements;
        username = input[0].value;
        sessionStorage.setItem("username", username);
        router.navigate("/Home");
      });
  }
  if (state.view === "Comeback") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("img_cart").style.display = "none";
    document.getElementById("img_logout").style.display = "block";
    document.getElementById("cart_count").style.display = "none";
  }
  if (state.view === "Home") {
    home.chat();
  }

  if (state.view === "Profile") {
    profile.editProfile(store, username);
  }

  if (state.view === "Gifts") {
    gifts.loadGift();
  }

  if (state.view === "Cart") {
    profile.loadStates();
    cart.cartHandle(router);
  }

  if (state.view === "Confirm") {
    confirm.loadConfirm(router);
    cartCount = gifts.getCartCount();
    document.getElementById("cart_count").innerText = cartCount;
  }
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
