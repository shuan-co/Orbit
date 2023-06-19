import "./chatspace.css";
import React, { useState } from "react";
import FriendsBox from "./components/FriendsBox";
import FriendMessage from "./components/FriendMessage";

function ChatSpace() {
  const [chatboxid, setChatBoxId] = useState(true);
  const updateChatBoxId = () => {
    setChatBoxId(!chatboxid);
  };

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
              <FriendsBox onClick={updateChatBoxId} />
              <FriendsBox onClick={updateChatBoxId} />
              <FriendsBox onClick={updateChatBoxId} />
              <FriendsBox onClick={updateChatBoxId} />
              <FriendsBox onClick={updateChatBoxId} />
            </div>
            <div id="content-message-border-chatspace">
              {chatboxid ? (
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
              ) : (
                <div id="content-message-chatspace-selected">
                  <div id="content-message-header-chatspace">
                    <div id="content-message-info-chatspace">
                      <span id="content-message-header-name-chatspace">
                        Seele
                      </span>
                      <span id="content-message-header-sub-chatspace">
                        <br />
                        If you have anything to say, spill it!
                      </span>
                    </div>
                    <hr />
                  </div>
                  <div id="content-message-container-chatspace">
                    <FriendMessage sender={true} />
                    <FriendMessage sender={false} />
                    <FriendMessage sender={false} />
                    <FriendMessage sender={false} />
                    <FriendMessage sender={true} />
                    <FriendMessage sender={false} />
                    <FriendMessage sender={true} />
                    <FriendMessage sender={false} />
                  </div>
                  <div id="content-message-sub-chatspace">
                    <input
                      type="text"
                      name=""
                      id="content-message-input-chatspace"
                      placeholder="Message Here"
                    />
                    <button id="content-message-submit-chatspace">Send</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatSpace;
