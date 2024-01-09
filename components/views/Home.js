import html from "html-literal";

export default () => html`
  <div class="chat_container">
    <div class="chat_layout">
      <div class="chatRoomContainer" id="lst_user">
        <p>main room chat</p>
        <hr />
        <ul id="roomChat">
          <li>user 1 example</li>
          <li>user 2 example</li>
          <li>user 3 example</li>
          <li>user 4 example</li>
        </ul>
      </div>
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
