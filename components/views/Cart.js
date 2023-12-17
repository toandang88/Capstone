import html from "html-literal";
import itemPhoto from "../../assets/img/gifts/debossed.png";
import cancelIcon from "../../assets/img/icons/close.png";
import submitIcon from "../../assets/img/icons/ok-16.png";
export default () => html`
<main>
    <div class="flx_cartContainer" >
      <hr>
      <div id="cartDetail_Container">
        <div id="img_CartContainer" >
          <img id="img_Cart" src="${itemPhoto}">
        </div>
        <div id="cart_description">
          <div id="Cart_productNamePrice">
            <div id="productName">Wrist band - blue -custommmmmmmdsadadsdsdfafafa</div>
            <div id="price">$15.00</div>
            <select class="cls_input" id="sel_quantity" name="quantity">
              <option value=1>1</option>
              <option value=2>2</option>
              <option value=3>3</option>
              <option value=4>4</option>
              <option value=5>5</option>
            </select>
            <div id="lnk_delete">Delete</div>
            <label id="lbl_totalPrice">$30.00</label>
          </div>
        </div>
      </div>
      <hr>
      <div id="total_container">
        <h2>Total</h2>
        <table id="tbl_total">
          <tr>
            <td><label>Item(s) subtotal:</label></td>
            <td><label id="sub_total">$70.00</label></td>
          </tr>
          <tr>
            <td><label>Shipping: </label></td>
            <td> <label id="shipping_fee">$15.00</label></td>
          </tr>
          <tr>
            <td><label>Tax(8.25%):</label></td>
            <td><label id="tax">$5.77</label></td>
          </tr>
          <tr><td class="tbl_breakLine"></td>
            <td class="tbl_breakLine"></td>
          </tr>
          <tr>
            <td><label>Grand total:</label></td>
            <td><label id="grand_total">$90.775</label></td>
          </tr>
        </table>
      </div>
      <hr>
      <div id="shipping_container">
        <h2>Shipping Info</h2>
        <form id="cart_userData">
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
              <select  class="cls_state" id="slt_states" name="states"></select>
            </div>
          </div>
          <div class="editContainer">
            <div id="lnk_cancelEdit"  class="link_styles"><img src="${cancelIcon}"></img>Cancel</div>
            <button type="submit" id="lnk_saveUserData"  class="link_styles"><img src="${submitIcon}"></img>Confirm</button>
          </div>
        </form>
      </div>
    </div>
`;
