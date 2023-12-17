import html from "html-literal";

export default () => html`
<main>
    <div class="chat_container">
      <div class="chat_layout">
        <div class="chatRoomContainer" id="lst_user">
          <p>main room chat</p>
          <hr>
            <ul id="roomChat">
              <li>user 1 example</li>
              <li>user 2 example</li>
              <li>user 3 example</li>
              <li>user 4 example</li>
            </ul>
        </div>
        <div class="chatContentContainer" id="chatContentContainer">
          <ul class="cls_messages" id="messages">This is chat content</ul>
        </div>
        <div class="chatInputContainer">
          <form id="messages" action=""></form>
            <input type="text" class="cls_chatbox" id="chatInput" placeholder="Your chat here"><button class="button">Send</button>
        </form>
        </div>
      </div>
    </div>
  </main>
`;
