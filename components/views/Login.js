import html from "html-literal";

export default () => html`
  <main>
    <div id="lbl_holder">
      <form id="submit_login">
        <input
          type="text"
          class="cls_input"
          id="txt_loginName"
          placeholder="Please enter your name"
          maxlength="25"
          required
        />
        <button class="link_styles" type="submit" id="btn_login">
          Login
        </button>
      </form>
    </div>
  </main>
`;
