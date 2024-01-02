import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
// import axios from "axios";
import * as login from "./scripts/login.js";
import * as profile from "./scripts/profile.js";
import * as cart from "./scripts/cart.js";

const router = new Navigo("/");
const PORT = process.env.PORT || "http://localhost:3000";

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
  // Reset for the doNotDisplayAgain checkbox
  // login.resetCheck(true);

  if (state.view === "Login") {
    login.checkAgreement();
    login.login();
  }

  // if (state.view === "Home") {
  // }

  if (state.view === "Profile") {
    profile.editProfile(store, router);
    profile.uploadImage(PORT);
    // router.navigate("/Profile");
  }

  if (state.view === "Gifts") {
    document.getElementById("btn_buy").addEventListener("click", function() {
      window.location.href = "/Cart";
    });
  }

  if (state.view === "Cart") {
    profile.loadStates();
    cart.cartHandle();
  }

  if (state.view === "Confirm") {
    document.getElementById("btn_home").addEventListener("click", function() {
      window.location.href = "/Home";
    });

    document.getElementById("btn_goGift").addEventListener("click", function() {
      window.location.href = "/Gifts";
    });
  }
}

// router.hooks({
//   before: done => {
//     // Get request to retrieve the current weather data using the API key and providing a city name
//     axios
//       .get(
//         `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=${currentCity}`
//       )
//       .then(response => {
//         // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
//         const kelvinToFahrenheit = kelvinTemp =>
//           Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

//         // Create an object to be stored in the Nav state from the response
//         let temperature = kelvinToFahrenheit(response.data.main.temp) + "°F";
//         let description = response.data.weather[0].main + " Sky";
//         store.Nav.weather = {
//           city: response.data.name,
//           temp: temperature,
//           // feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
//           description: description
//         };
//       });

//     done();
//   },
//   already: params => {
//     const view =
//       params && params.data && params.data.view
//         ? capitalize(params.data.view)
//         : "Home";

//     render(store[view]);
//   }
// });

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
