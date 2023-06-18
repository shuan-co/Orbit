import "./chatspace.css";
import FriendsBox from "./components/FriendsBox";

function ChatSpace() {
  return (
    <>
      <div id="stage-chatspace">
        <div id="outer-container-chatspace">
          <div id="inner-container-header-chatspace">
            <img id="icon-chatspace" src="./chatspace/icon.png" />
            <span id="icon-message-chatspace">Messages</span>
          </div>
          <div id="inner-container-content">
            <div id="scrollbar-friends-chatspace">
              <FriendsBox />
              <FriendsBox />
              <FriendsBox />
              <FriendsBox />
              <FriendsBox />
            </div>
            <div id="content-message-border-chatspace">
              <div id="content-message-chatspace">
                <img
                  id="content-message-icon-chatspace"
                  src="./chatspace/contacticon.png"
                  alt=""
                />
                <span id="contect-message-select-user-chatspace">
                  Please select a contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatSpace;
