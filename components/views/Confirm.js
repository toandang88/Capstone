import html from "html-literal";

export default () => html`
  <div id="lbl_holder">
    <div>
      <h1>Confirmation</h1>
      <h1>Thank you for your Order!</h1>
      <span id="lbl_confirmContent" class="content"></span>
      <div id="flx_button">
        <button class="button link_styles" type="button" id="btn_home">
          Go to Home
        </button>
        <button class="button link_styles" type="button" id="btn_goGift">
          Gift Shop
        </button>
      </div>
    </div>
  </div>
`;
