import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export function editProfile(store, router) {
  const content1 = document.getElementById("usr_data");
  const content2 = document.getElementById("usr_dataEdit");
  const lnkEdit = document.getElementById("lnk_edit");
  const lnkCancelEdit = document.getElementById("lnk_cancelEdit");

  function profileview() {
    content1.style.display = "flex";
    content2.style.display = "none";
  }

  function profileEdit() {
    content1.style.display = "none";
    content2.style.display = "flex";
    loadStates();
    createUser();
  }

  //show user view first
  profileview();

  lnkEdit.addEventListener("click", profileEdit);
  lnkCancelEdit.addEventListener("click", profileview);

  function createUser() {
    document
      .getElementById("usr_dataEdit")
      .addEventListener("submit", event => {
        event.preventDefault();

        const inputList = event.target.elements;
        console.log("list element", inputList);
        // const id = generateUniqueID();

        // console.log(id);
        const requestData = {
          // _id: id,
          username: inputList[0].value,
          email: inputList.email.value,
          phone: inputList.phone.value,
          address: inputList.address.value,
          city: inputList.city.value,
          zip: inputList.zip.value,
          state: inputList.state.value
        };
        console.log("request Body: ", requestData);
        axios
          // .post(`${process.env.API_URL}/profiles`, requestData)
          .post(`http://localhost:3000/profiles`, requestData)
          .then(response => {
            store.Profile.profile.push(response.data);
            router.navigate("/Profile");
          })
          .catch(error => {
            console.log("Error", error);
          });
      });
  }
}

// function generateUniqueID() {
//   const currentDate = new Date();

//   const year = currentDate.getFullYear().toString();
//   const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
//   const day = currentDate
//     .getDate()
//     .toString()
//     .padStart(2, "0");
//   const hours = currentDate
//     .getHours()
//     .toString()
//     .padStart(2, "0");
//   const minutes = currentDate
//     .getMinutes()
//     .toString()
//     .padStart(2, "0");
//   const seconds = currentDate
//     .getSeconds()
//     .toString()
//     .padStart(2, "0");

//   // Optionally, add a random component to ensure uniqueness
//   const randomPart = Math.random()
//     .toString()
//     .slice(2, 8); // Adjust the length as needed

//   // Concatenate the components to create the unique ID
//   const uniqueID = `${year}${month}${day}${hours}${minutes}${seconds}${randomPart}`;

//   return uniqueID;
// }

export function uploadImage(port) {
  const form = document.getElementById("imageUpload");
  const fileInput = document.getElementById("fileInput");

  // Update the form's action to the correct route
  form.setAttribute("action", `${port}/uploads`);

  document.addEventListener("click", function(event) {
    if (event.target.id === "uploadButton") {
      fileInput.click();
    }
  });

  fileInput.addEventListener("change", function(event) {
    if (event.target.id === "fileInput") {
      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.getAttribute("action"), {
        method: form.getAttribute("method"),
        body: formData
      })
        .then(response => response.text())
        .catch(error => {
          console.error("Error:", error);
        });
    }
  });
}

export function loadStates() {
  const usStates = [
    "--Select--",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];

  const stateSelect = document.getElementById("state");
  if (stateSelect) {
    usStates.forEach(state => {
      const option = document.createElement("option");
      option.value = state;
      option.text = state;
      stateSelect.add(option);
    });
  }
}
