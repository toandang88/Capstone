import html from "html-literal";
import background from "../../assets/img/background.jpg";
import personalPhoto from "../../assets/img/personalPhoto.jpeg";
export default () => html`
  <div id="lbl_holder">
    <div>
      <img id="img_background" src="${background}" />
      <img id="img_about" src="${personalPhoto}" />
    </div>
    <div>
      <span id="lbl_about" class="content"></span>
    </div>
  </div>
`;
