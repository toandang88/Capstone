import html from "html-literal";
import imgPlaceholder from "../../assets/img/icons/photo_placeholder.png";
import iconPencil from "../../assets/img/icons/pencil-16.png";
export default () => html`
<div id="lbl_holder">
    <div id="flx_profile">
      <div id="flx_image">
        <img id="img_profile" src="${imgPlaceholder}">
        <div class="img_link">
          <a class="link_styles" id="lnk_upload">Upload</a>
          <a class="link_styles" id="lnk_delete">Delete</a>
        </div>
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
      </div>
    </div>
  </div>
`;
