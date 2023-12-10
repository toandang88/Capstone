import * as common from "./common.js";

window.loadMenu();

//Load States for select box
function loadStates() {
  const stateSelect = document.getElementById("slt_states");
  if (stateSelect) {
    stateSelect.addEventListener("load", function() {
      fetch("/docs/states.txt")
        .then(response => response.text())
        .then(data => {
          const states = data.split("\n"); //split states by new line

          states.forEach(state => {
            const option = document.createElement("option");
            option.text = state;
            stateSelect.add(option);
          });
        })
        .catch(error => console.error("Error fetching data:", error));
    });
  }
}
function switchEditStatus() {
  var editStatus;

  if ((editStatus = document.getElementById("lnk_edit"))) {
    editStatus.addEventListener("click", editUserData());
    loadStates();
    editStatus.addEventListener("click", usrUpdateCancel());
  } else if ((editStatus = document.getElementById("lnk_cancelEdit"))) {
    editStatus.addEventListener("click", usrUpdateCancel());
    editStatus.addEventListener("click", editUserData());
  }
}
switchEditStatus();

function editUserData() {
  const edit = document.getElementById("lnk_edit");

  if (edit) {
    edit.addEventListener("click", function() {
      const usrData = document.getElementById("usr_data");

      usrData.innerHTML = "";
      usrData.innerHTML = `
    <label for="txt_userName" name="userName">User name</label>
    <input type="text" class="cls_input cls_userData" id="txt_userName" placeholder="User Name" required>
    <label for="txt_email" name="email">Email Address</label>
    <input type="email" class="cls_input cls_userData" id="txt_email" placeholder="Email">
    <label for="txt_phone" name="phone">Phone</label>
    <input type="tel" class="cls_input cls_userData" id="txt_phone" placeholder="Enter 10 digit phone numbers">
    <label for="txt_address" name="address">Address</label>
    <input type="text" class="cls_input cls_userData" id="txt_address" placeholder="Address">
    <label for="txt_city" name="city">City</label>
    <input type="text" class="cls_input cls_userData" id="txt_city" placeholder="City">

    <div class="flx_zipCodeAndStates">
      <div class="flx_zip">
        <label for="txt_zip">Zip code</label>
        <input type="text" class="cls_input cls_zip" id="txt_zip" name="zip" placeholder="Zip Code">
      </div>
      <div class="flx_states">
        <label for="slt_states">States</label>
        <select  class="cls_input cls_state" id="slt_states" name="states"></select>
      </div>
    </div>
    <div class="editContainer">
      <div id="lnk_cancelEdit"  class="link_styles"><img src="../img/icons/close.png"></img>Cancel</div>
      <button type="submit" id="lnk_saveUserData"  class="link_styles"><img src="../img/icons/ok-16.png"></img> Save</button>
        </div>
    `;
    });
  }
}

function usrUpdateCancel() {
  let usrData = document.getElementById("lnk_cancelEdit");

  if (usrData) {
    usrData.addEventListener("click", function() {
      const usrData = document.getElementById("usr_data");
      usrData.innerHTML = "";
      usrData.innerHTML = `
        <div class="editContainer">
            <div id="lnk_edit"  class="link_styles"><img src="../img/icons/pencil-16.png"></img> Edit profile</div>
          </div>
          <label id="lbl_usrName" for="txt_userName">User name:</label>
          <label id="lbl_email" for="txt_email">Email Address</label>
          <label id="lbl_phone" for="txt_phone">Phone</label>
          <label id="lbl_address" for="txt_address">Address</label>
          <label id="lbl_city" for="txt_city">City</label>
          <label id="lbl_zip" for="txt_zip">Zip code</label>
          <label id="lbl_states" for="slt_states">States</label>
        `;
    });
  }
}

document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > table").classList.toggle("tbl_menu");
});
