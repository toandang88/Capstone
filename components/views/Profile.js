import html from "html-literal";
import imgPlaceholder from "../../assets/img/icons/photo_placeholder.png";
import iconPencil from "../../assets/img/icons/pencil-16.png";
import closeIcon from "../../assets/img/icons/close.png";
import oKIcon from "../../assets/img/icons/ok-16.png";

export default () => html`
<div id="lbl_holder">
    <div id="flx_profile">
      <div id="flx_image">
        <img id="img_profile" src="${imgPlaceholder}">
        <form id="imageUpload" action="" method="post" enctype="multipart/form-data" class="img_link" >
        <input type="file" name="file" accept="image/*" id="fileInput">
        <button type="button" class="link_styles" id="uploadButton" >Upload</button>
        <button type="submit" id="submitButton">Submit</button>
          <a class="link_styles" id="lnk_delete">Delete</a>
        </form>
      </div>
      <form id="usr_data">
        <div class="editContainer">
          <div id="lnk_edit"  class="link_styles"><img src="${iconPencil}"></img> Edit profile</div>
        </div>
        <label id="lbl_usrName" ">User name:</label>
        <label id="lbl_email" >Email Address</label>
        <label id="lbl_phone" >Phone</label>
        <label id="lbl_address" >Address</label>
        <label id="lbl_city" >City</label>
        <label id="lbl_zip" >Zip code</label>
        <label id="lbl_states" >States</label>
      </form>
      <form id="usr_dataEdit">
        <label for="username" name="username">User name</label>
        <input type="text" class="cls_input cls_userData" id="username" placeholder="User Name" required>
        <label for="email" name="email">Email Address</label>
        <input type="email" class="cls_input cls_userData" id="email" placeholder="Email">
        <label for="phone" name="phone">Phone</label>
        <input type="tel" class="cls_input cls_userData" id="phone" placeholder="Enter 10 digit phone numbers">
        <label for="address" name="address">Address</label>
        <input type="text" class="cls_input cls_userData" id="address" placeholder="Address">
        <label for="city" name="city">City</label>
        <input type="text" class="cls_input cls_userData" id="city" placeholder="City">

        <div class="flx_zipCodeAndStates">
          <div class="flx_zip">
            <label for="zip">Zip code</label>
            <input type="text" class="cls_input cls_zip" id="zip" name="zip" placeholder="Zip Code">
          </div>
          <div class="flx_states">
            <label for="state">States</label>
            <select  class="cls_input cls_state" id="state" name="state"></select>
          </div>
        </div>
        <div class="editContainer">
          <div id="lnk_cancelEdit"  class="link_styles"><img src="${closeIcon}"></img>Cancel</div>
          <button type="submit" id="lnk_saveUserData"  class="link_styles"><img src="${oKIcon}"></img> Save</button>
        </div>
      </form>
      </div>
    </div>
  </div>
`;
