// import html from "html-literal";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

//make count for the gifts in cart
export function getCartCount() {
  let cartGiftString = sessionStorage.getItem("cartGift");
  let cartGiftLength = cartGiftString ? JSON.parse(cartGiftString).length : 0;
  return cartGiftLength;
}

export async function loadGift(router) {
  let responseData;

  let cartCount = getCartCount();
  if (cartCount != "") {
    document.getElementById("cart_count").innerText = cartCount;
  } else document.getElementById("cart_count").innerText = 0;
  async function getGiftsResponseData() {
    try {
      const response = await axios.get(`${process.env.API_URL}/gifts`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }

  try {
    responseData = await getGiftsResponseData();
    responseData.forEach(gift => {
      document.getElementById("body_container").innerHTML += `<hr />
      <div class="flx_giftContainer">
        <div class="border_topBottom img_giftContainer">
          <img class="img_gift" src="${
            process.env.API_URL
          }/images/${gift.img.toString()}" />
        </div>
        <div class="gift_description">
          <div class="giftProductNamePrice">
            <div class="giftProductName">${gift.productname}</div>
            <div class="giftPrice">$${gift.price}</div>
          </div>
          <div class="gift_contentDescription">${gift.description}</div>
        </div>
        <div class="btn_container">
          <button type="submit" class="link_styles button btn_addCart" data-gift-id="${gift._id.toString()}">
            Add to cart
          </button>
          <button type="submit" class="link_styles button btn_buy" data-gift-id="${gift._id.toString()}">
            Buy now
          </button>
        </div>
      </div>`;
    });
  } catch (error) {
    console.log("Error fetching user data", error);
  }

  // document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn_addCart, .btn_buy");
  let assignedGiftIDs = JSON.parse(sessionStorage.getItem("cartGift")) || [];
  buttons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      const assignedGiftID = button.dataset.giftId;
      if (!assignedGiftIDs.includes(assignedGiftID)) {
        assignedGiftIDs.push(assignedGiftID);
      }

      if (this.classList.contains("btn_addCart")) {
        sessionStorage.setItem("cartGift", JSON.stringify(assignedGiftIDs));
        cartCount = getCartCount();
        document.getElementById("cart_count").innerText = cartCount;
      } else if (this.classList.contains("btn_buy")) {
        sessionStorage.setItem("cartGift", JSON.stringify(assignedGiftIDs));
        cartCount = getCartCount();
        document.getElementById("cart_count").innerText = cartCount;
        window.location.href = "/Cart";
      }
    });
  });
}
