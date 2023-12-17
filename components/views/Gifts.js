/* eslint-disable prettier/prettier */
import html from "html-literal";
import productImg from "../../assets/img/gifts/debossed.png";

export default () => html`
  <main>
    <div id="body_container">
      <div id="flx_giftContainer">
        <div id="img_giftContainer" class="border_topBottom">
          <img id="img_gift" src="${productImg}" />
        </div>
        <div id="gift_description">
          <div id="giftProductNamePrice">
            <div id="giftProductName">Wrist band - blue</div>
            <div id="giftPrice">$15.00</div>
          </div>
          <div id="gift_contentDescription">
            This is De scriptionThis is DescriptionThis is Des 'This is
            DescriptionThis is DescriptionThis is Desc riptionThis is
            Description This is Description This is DescriptioncriptionThis is
            DescriptionThis is DescriptionThis is DescriptionThis is
            DescriptionThis is DescriptionThis is DescriptionThis is
            Desadssdddaddsdsdadaddacription This is Description This is
            Description This is Description
            DescriptionDescriptionDescriptionDescriptio nDescriptionDesc
            riptionDescription DescriptionDescription Description Description
            Description This is Description
          </div>
        </div>
        <div id="btn_container">
          <button type="submit" class="link_styles button" id="btn_addCart">
            Add to cart
          </button>
          <button type="submit" class="link_styles button" id="btn_buy">
            Buy now
          </button>
        </div>
      </div>
      <hr>
    </div>
  </main>
`;
