import html from "html-literal";
// import itemPhoto from "../../assets/img/gifts/debossed.png";
import cancelIcon from "../../assets/img/icons/close.png";
import submitIcon from "../../assets/img/icons/ok-16.png";
export default () => html`
    <div class="flx_cartContainer" >
      <hr>
      <div id="gift_container">
      </div>
      <hr>
      <div id="total_container">
        <h2>Total</h2>
        <table id="tbl_total">
          <tr>
            <td><label>Item(s) subtotal:</label></td>
            <td><label id="sub_total"></label></td>
          </tr>
          <tr>
            <td><label>Shipping: </label></td>
            <td> <label id="shipping_fee">$15.00</label></td>
          </tr>
          <tr>
            <td><label>Tax(8.25%):</label></td>
            <td><label id="tax"></label></td>
          </tr>
          <tr><td class="tbl_breakLine"></td>
            <td class="tbl_breakLine"></td>
          </tr>
          <tr>
            <td><label>Grand total:</label></td>
            <td><label id="grand_total"></label></td>
          </tr>
        </table>
      </div>
      <hr>
      <div id="shipping_container">
        <h2>Shipping Info</h2>
        <form id="cart_userData">
          <label for="recipient" name="recipient">Recipient</label>
          <input type="text" class="cls_input cls_userData" id="recipient" placeholder="Recipient" required>
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
              <label for="states">States</label>
              <select  class="cls_input cls_state slt_states" id="state" name="state"></select>
            </div>
          </div>
          <div class="editContainer">
            <div id="cancelCart"  class="link_styles lnk_cancelEdit"><img src="${cancelIcon}"></img>Cancel</div>
            <button type="submit" id="lnk_saveUserData"  class="link_styles"><img src="${submitIcon}"></img>Confirm</button>
          </div>
        </form>
      </div>
    </div>
`;
