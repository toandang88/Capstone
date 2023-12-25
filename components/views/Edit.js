import html from "html-literal";
import placeholder from "../../assets/img/icons/photo_placeholder.png";
import closeIcon from "../../assets/img/icons/close.png";
import oKIcon from "../../assets/img/icons/ok-16.png";

export default () => html`
<div id="lbl_holder">
    <div id="flx_profile">
      <div id="flx_image">
        <img id="img_profile" src=${placeholder}">
        <div class="img_link">
          <a class="link_styles" id="lnk_upload">Upload</a>
          <a class="link_styles" id="lnk_delete">Delete</a>
        </div>
      </div>
      <form id="usr_data">
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
  </div>
`;
