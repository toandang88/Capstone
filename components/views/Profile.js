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
        <form id="imageUpload" action="/uploads" method="POST" enctype="multipart/form-data" class="img_link" >
        <input type="file" name="file" accept=".png,.jpg,.jpeg" id="fileInput">
        <button type="button" class="link_styles" id="uploadButton" >Upload</button>
        <button type="submit" id="submitButton">Submit</button>
          <a class="link_styles" id="lnk_delete">Delete</a>
        </form>
      </div>
      <form id="usr_data">
        <div class="editContainer">
          <div id="lnk_edit"  class="link_styles"><img src="${iconPencil}"></img> Edit profile</div>
        </div>
        <label id="lbl_usrName" for="txt_userName">User name:</label>
        <label id="lbl_email" for="txt_email">Email Address</label>
        <label id="lbl_phone" for="txt_phone">Phone</label>
        <label id="lbl_address" for="txt_address">Address</label>
        <label id="lbl_city" for="txt_city">City</label>
        <label id="lbl_zip" for="txt_zip">Zip code</label>
        <label id="lbl_states" for="slt_states">States</label>
      </form>
      <form id="usr_dataEdit">
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
          <div id="lnk_cancelEdit"  class="link_styles"><img src="${closeIcon}"></img>Cancel</div>
          <button type="submit" id="lnk_saveUserData"  class="link_styles"><img src="${oKIcon}"></img> Save</button>
        </div>
      </form>
      </div>
    </div>
  </div>
`;
