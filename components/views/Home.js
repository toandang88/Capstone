import html from "html-literal";

export default () => html`
  <div class="chat_container">
    <div class="chat_layout">
      <div class="chatContentContainer" id="chatContentContainer">
        <div class="cls_messages" id="msg"></div>
      </div>
      <div class="chatInputContainer">
        <form id="msgForm">
          <input
            type="text"
            class="cls_chatbox"
            id="chatInput"
            placeholder="Your chat here"
          /><button type="submit" class="button">Send</button>
        </form>
      </div>
    </div>
  </div>
`;
