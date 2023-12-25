/* eslint-disable prettier/prettier */
import html from "html-literal";

export default () => html`
  <div id="lbl_holder">
    <div>
      <h1>Confirmation</h1>
      <h1>Thank you for your Order!</h1>
      <span id="lbl_confirmContent" class="content">
  We are delighted to confirm that we have received your order #[OrderNumber] placed on [Order Date]. Your business is highly valued, and we appreciate the trust you have placed in us.

        Here are the details of your order:

          Product(s): [wrist band blue, wrist band orange]
          Order Total:[$90.775]
          Shipping Address: [Shipping Address]
          Contact Phone: [Phone Contact]
          Email Address: [Email Address]

 Our team is now working diligently to process and fulfill your order promptly. You will receive a shipping confirmation email with tracking details once your order has been dispatched. If you have any questions or if there's anything else we can assist you with, please don't hesitate to reach out to our customer service team at [Customer Service Email or Phone Number].

        <h4>
 Once again, thank you for choosing ThunderTalk. We are grateful for the opportunity to serve you, and we look forward to exceeding your expectations.
        </h4>
      </span>
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
