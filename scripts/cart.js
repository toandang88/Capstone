/* eslint-disable prettier/prettier */
/* eslint-disable no-inner-declarations */
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

//Get value from session
let savedGiftInfo = sessionStorage.getItem("cartGift");
let total = 0;
//convert currency to number
function currencyToNum(value) {
  return parseFloat(value.replace(/[^\d.]/g, ""));
}

//convert number to currency
function numToCurrency(value) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

//get and return value of drop down box
function getSelectValue(selectedItem) {
  const selectedOption = selectedItem.options[selectedItem.selectedIndex];
  const selectedValue = selectedOption.value;
  return selectedValue;
}

export async function cartHandle(router) {
  const container = document.getElementById("gift_container");
  if (savedGiftInfo===null){
    const cartDetailContainer = document.createElement("div");
    cartDetailContainer.classList.add("cartDetail_Container");

    cartDetailContainer.innerHTML = `
      <h1>You Don't Have Any Gifts In Cart. Please Go To "Gifts" To Select!!!!</h1>
    `;
    container.appendChild(cartDetailContainer);
  }else{
  //convert id from session to Array
  let giftIds = JSON.parse(savedGiftInfo) || [];



  //get and return data of a gift by id
  async function getGiftsResponseData(id) {
    try {
      const response = await axios.get(`${process.env.BACKEND_API_URL}/gifts/${id}`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }

  //append data for each gift from session into element gift_container with a loop


  for (const id of giftIds) {
    let responseData = await getGiftsResponseData(id);

    const cartDetailContainer = document.createElement("div");
    cartDetailContainer.classList.add("cartDetail_Container");

    cartDetailContainer.innerHTML = `
      <div class="img_CartContainer">
        <img class="img_Cart" src="${process.env.BACKEND_API_URL}/images/${responseData.img}">
      </div>
      <div class="cart_description">
        <div class="Cart_productNamePrice">
          <div class="productName">${responseData.productname}</div>
          <div class="price">$${responseData.price}</div>
          <select class="cls_input sel_quantity" name="quantity" id="slt${id}">
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
          </select>
          <div id="lnk_delete">Delete</div>
          <label class="totalPrice" id="totalPrice${id}"></label>
        </div>
      </div>
    `;

    container.appendChild(cartDetailContainer);
    //Calculate for total price at first load

    //Calculation for total price when changing number of items
    //identify dropdown associate with id of each gift
    const selectedItem = document.getElementById(`slt${id}`);

    //Initial calculation for total prices
    // calculate and return total price base on the selected quantity value
    function calcPrice() {
      const totalPrice = getSelectValue(selectedItem) * responseData.price;
      return totalPrice;
    }

    //set initial prices for each gift
    let totalPricePerItem = numToCurrency(calcPrice());
    document.getElementById(`totalPrice${id}`).innerHTML = `${totalPricePerItem}`;



    //add event listener change for dropdown box
    selectedItem.addEventListener("change", () => {

      //set total price per item again for each change
      totalPricePerItem = numToCurrency(calcPrice());
      document.getElementById(`totalPrice${id}`).innerHTML = `${totalPricePerItem}`;
      showTotal();

    });
  }



  function showTotal(){
  //select price of of all items
  const totalPriceElements = document.querySelectorAll('.totalPrice');

  // Initialize the total sum
  let subTotal = 0;
  let tax = 0;
  let grandToTal = 0;
  // Iterate through each element and accumulate the total
  totalPriceElements.forEach(element => {
    // Convert the text content to a number and add to the total
    const priceValue = currencyToNum(element.textContent);
    subTotal += priceValue;
  });
   document.getElementById("sub_total").innerText = `${numToCurrency(subTotal)}`;

   //set total value of tax
   tax = (subTotal * 8.25) / 100;
   document.getElementById("tax").innerText = `${numToCurrency(tax)}`;

   //set value of grand total
   grandToTal = subTotal + tax + 15;
   document.getElementById("grand_total").innerText = `${numToCurrency(grandToTal)}`;
  total =grandToTal;

  }
  showTotal();
  }

//Add Listener for Cancel
  document.getElementById("cancelCart").addEventListener("click",function() {
    router.navigate("/Gifts");});

 //Add Listener for Confirm
 const cartForm = document.getElementById("cart_userData");

cartForm.addEventListener("submit", event =>{
  event.preventDefault();
  let listName = [];

  const listGiftsElement = document.querySelectorAll('.productName');
  const inputList = event.target.elements;
  const requestData = {

    grandtotal: total,
    recipient: inputList.recipient.value,
    email: inputList.email.value,
    phone: inputList.phone.value,
    address: inputList.address.value,
    city: inputList.city.value,
    zip: inputList.zip.value,
    state: inputList.state.value
  };

  axios
  .post(`${process.env.BACKEND_API_URL}/cart`, requestData)
  .then(response => {
    response.status;
  })
  .catch(error => {
    console.log("Error", error);
  });

  //set session shipping info
  const shippingAddress = `${inputList.address.value} ${inputList.city.value} ${inputList.zip.value} ${inputList.state.value}`;
  sessionStorage.setItem("recipient",inputList.recipient.value);
  sessionStorage.setItem("shippingAddress",shippingAddress);
  sessionStorage.setItem("phone",inputList.phone.value);
  sessionStorage.setItem("email",inputList.email.value);

  //Set session list of gifts
  listGiftsElement.forEach(element =>{
    listName.push(element.textContent);
  });
  sessionStorage.setItem("listName",listName);

  //Set session price and name
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString();
  sessionStorage.setItem("orderNumber","TT"+Math.random());
  sessionStorage.setItem("dateTime",formattedDateTime);
  sessionStorage.setItem("total",total);

  window.location.href="/Confirm";



    })
}
