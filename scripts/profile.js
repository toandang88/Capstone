import axios from "axios";
import dotenv from "dotenv";
import imgPlaceholder from "../assets/img/icons/photo_placeholder.png";
dotenv.config();

export async function editProfile(store, username) {
  const viewContent = document.getElementById("usr_data");
  const editContent = document.getElementById("usr_dataEdit");
  const lnkEdit = document.getElementById("lnk_edit");
  const imgfunctions = document.getElementById("imageUpload");
  const img = document.getElementById("img_profile");

  async function getUserResponseData(username) {
username = sessionStorage.getItem("username");

    try {
      const response = await axios.get(
        `${process.env.API_URL}/profiles/${username}`
      );
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  }

  let imgName="";
  let responseData =[];
  // get user data base on the username
  try {
    responseData = await getUserResponseData(username);
    //show user data by username
    profileview(username);

    //add click method to Edit button
    if (!lnkEdit.clickEventAttached) {
      lnkEdit.addEventListener("click", event => {
        event.preventDefault();
        //show Edit page
        showEdit(username);
      });
    }

    // add click method to Cancel button in edit view
    const lnkCancelEdit = document.getElementById("lnk_cancelEdit");

    if (lnkCancelEdit) {
      lnkCancelEdit.addEventListener("click", () => {
        viewContent.style.display = "flex";
        imgfunctions.style.display="none";
        editContent.style.display = "none";
      });
    }
  } catch (error) {
    console.log("Error fetching user data", error);
  }

  function profileview(username) {
    //if the username is not in DB, show the username only which is user used to login
    if (username != responseData[0]?.username) {
      viewContent.style.display = "flex";
      imgfunctions.style.display="none";
      editContent.style.display = "none";
      document.getElementById("lbl_usrName").innerHTML = username;
    } else {
      //show all user data if the username exist in DB
      viewContent.style.display = "flex";
      imgfunctions.style.display="none";
      editContent.style.display = "none";
      showImage(responseData);
      //store in models before calling out to show in view page
      store.Profile.profile = responseData;

      document.getElementById("lbl_usrName").innerHTML =
        store.Profile.profile[0].username;
      document.getElementById("lbl_email").innerHTML =
        store.Profile.profile[0].email;
      document.getElementById("lbl_phone").innerHTML =
        store.Profile.profile[0].phone;
      document.getElementById("lbl_address").innerHTML =
        store.Profile.profile[0].address;
      document.getElementById("lbl_city").innerHTML =
        store.Profile.profile[0].city;
      document.getElementById("lbl_zip").innerHTML =
        store.Profile.profile[0].zip;
      document.getElementById("lbl_states").innerHTML =
        store.Profile.profile[0].state;
    }
  }

  function showEdit(username) {
    //if username is not in DB, only show username user input from login
    if (username != responseData[0]?.username) {
      viewContent.style.display = "none";
      imgfunctions.style.display="flex";
      editContent.style.display = "flex";
      document.getElementById("username").value = username;
      loadStates();
    } else {
      //show all user data if username exist in DB
      viewContent.style.display = "none";
      imgfunctions.style.display="flex";
      editContent.style.display = "flex";
      loadStates();

      //get all user data stored in models
      document.getElementById("username").value =
        store.Profile.profile[0].username;
      document.getElementById("email").value = store.Profile.profile[0].email;
      document.getElementById("phone").value = store.Profile.profile[0].phone;
      document.getElementById("address").value =
        store.Profile.profile[0].address;
      document.getElementById("city").value = store.Profile.profile[0].city;
      document.getElementById("zip").value = store.Profile.profile[0].zip;

      const newStateValue = store.Profile.profile[0].state;
      const statesSelect = document.getElementById("state");

      for (var i = 0; i < statesSelect.options.length; i++) {
        if (statesSelect.options[i].value === newStateValue) {
          statesSelect.options[i].selected = true;
          break;
        }
      }
    }
  }

  //add submit listener for edit form
  const usrDataEditForm = document.getElementById("usr_dataEdit");

  if (usrDataEditForm) {
    usrDataEditForm.addEventListener("submit", event => {
      event.preventDefault();
      const inputList = event.target.elements;
      const requestData = {
        username: inputList.username.value,
        email: inputList.email.value,
        phone: inputList.phone.value,
        address: inputList.address.value,
        city: inputList.city.value,
        zip: inputList.zip.value,
        state: inputList.state.value,
        img: imgName
      };
      viewContent.style.display = "flex";
      imgfunctions.style.display="none";
      editContent.style.display = "none";
      let usernameResponse = responseData[0]?.username;
      if (username != usernameResponse) {
        postMethod(requestData);
      } else {
        putMethod(username, requestData);
      }
    });
  }

  function postMethod(requestData) {
    axios
      .post(`${process.env.API_URL}/profiles`, requestData)
      .then(response => {
        store.Profile.profile = response.data;
        responseData[0] = store.Profile.profile;
        document.getElementById("lbl_usrName").innerHTML =
          response.data.username;
        document.getElementById("lbl_email").innerHTML = response.data.email;
        document.getElementById("lbl_phone").innerHTML = response.data.phone;
        document.getElementById("lbl_address").innerHTML =
          response.data.address;
        document.getElementById("lbl_city").innerHTML = response.data.city;
        document.getElementById("lbl_zip").innerHTML = response.data.zip;
        document.getElementById("lbl_states").innerHTML = response.data.state;
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  function putMethod(username, requestData) {
    axios
      .put(`${process.env.API_URL}/profiles/${username}`, requestData)
      .then(response => {
        store.Profile.profile = response.data;
        responseData[0] = store.Profile.profile;
        document.getElementById("lbl_usrName").innerHTML =
          response.data.username;
        document.getElementById("lbl_email").innerHTML = response.data.email;
        document.getElementById("lbl_phone").innerHTML = response.data.phone;
        document.getElementById("lbl_address").innerHTML =
          response.data.address;
        document.getElementById("lbl_city").innerHTML = response.data.city;
        document.getElementById("lbl_zip").innerHTML = response.data.zip;
        document.getElementById("lbl_states").innerHTML = response.data.state;
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  function uploadImage() {
    const form = document.getElementById("imageUpload");
    const fileInput = document.getElementById("fileInput");

    form.setAttribute("action", `${process.env.API_URL}/uploads`);

    document.addEventListener("click", function(event) {
      if (event.target.id === "uploadButton") {
        fileInput.click();
      }
    });

    fileInput.addEventListener("change", function(event) {
      if (event.target.id === "fileInput") {
        event.preventDefault();

        const formData = new FormData(form);
        axios.post(form.getAttribute("action"), formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(response => {
            imgName=response.data;
            img.setAttribute("src", `${process.env.API_URL}/uploads/${response.data}`);
            // deleteImage(responseData[0].img);
          })
          .catch(error => {
            console.error("Error:", error);
          });
      }
    });
  }

  uploadImage();

  function showImage(responseData){
    if(responseData[0].img!=undefined){
      img.setAttribute("src",`${process.env.API_URL}/uploads/${responseData[0].img}`);
    }else{
      img.setAttribute("src",imgPlaceholder);
    }
  }

  function deleteImage(filename){
    axios.delete(`${process.env.API_URL}/uploads/${filename}`,{
      "Access-Control-Allow-Headers": "X-Requested-With,content-type, Accept,Authorization,Origin",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Credentials": true
    })
    .then(response =>{
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error as needed
    });
  }

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
