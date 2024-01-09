import html from "html-literal";

export default () => html`
  <div id="ctn_agreement">
    <div id="box_agreementContent"></div>
    <div id="flx_agreementAction">
      <div id="chk_container">
        <label>
          <input type="checkbox" id="chk_agreement" /> Do not display again
        </label>
      </div>
      <div id="flx_button">
        <button class="link_styles button" id="btn_agree">Agree</button>
        <button class="link_styles button" id="btn_disAgree">Disagree</button>
      </div>
    </div>
  </div>
  <div id="lbl_holder" style="display: none;">
    <form id="submit_login">
      <input
        type="text"
        class="cls_input"
        id="loginName"
        placeholder="Please enter your name"
        maxlength="25"
        required
      />
      <button class="link_styles" type="submit" id="btn_login">
        Login
      </button>
    </form>
  </div>
`;
