import "./chatspace.css";
import React, { useState } from "react";
import FriendsBox from "./components/FriendsBox";
import FriendMessage from "./components/FriendMessage";
import NavigationBar from "../../components/navigation2/NavigationBar";
import BackgroundChatSpace from "./background/BackgroundChatSpace";

function ChatSpace() {
  const [chatboxid, setChatBoxId] = useState(true);
  const [prevName, setPrevName] = useState("");

  const updateChatBoxId = (name) => {
    setChatBoxId(false);
    setPrevName(name);
  };
  let content;
  if (prevName === "Seele") {
    content = (
      <div id="content-message-chatspace-selected">
        <div id="content-message-header-chatspace">
          <div id="content-message-info-chatspace">
            <span id="content-message-header-name-chatspace">Seele</span>
            <span id="content-message-header-sub-chatspace">
              <br />
              If you have anything to say, spill it!
            </span>
          </div>
          <hr />
        </div>
        <div id="content-message-container-chatspace">
          <FriendMessage
            sender={true}
            message={"Hi Himeko, how are you today?"}
            usericon={"/chatspace/seele.png"}
            name={"Seele"}
          />
          <FriendMessage
            sender={false}
            message={"I’m doing well, thanks for asking. How about you?"}
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              "I’m doing pretty good too. I was just thinking about our last mission."
            }
            usericon={"/chatspace/seele.png"}
            name={"Seele"}
          />
          <FriendMessage
            sender={false}
            message={"Oh yeah? What were you thinking about?"}
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              "Just how well we worked together as a team. I think we make a great duo."
            }
            usericon={"/chatspace/seele.png"}
            name={"Seele"}
          />
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
    );
  } else if (prevName === "Kafka") {
    content = (
      <div id="content-message-chatspace-selected">
        <div id="content-message-header-chatspace">
          <div id="content-message-info-chatspace">
            <span id="content-message-header-name-chatspace">Kafka</span>
            <span id="content-message-header-sub-chatspace">
              <br />
              Domination is key!
            </span>
          </div>
          <hr />
        </div>
        <div id="content-message-container-chatspace">
          <FriendMessage
            sender={true}
            message={"Hey Himeko, have you read any good books lately?"}
            usericon={"/chatspace/kafka.jpg"}
            name={"Kafka"}
          />
          <FriendMessage
            sender={false}
            message={
              "Actually, I just finished reading “The Metamorphosis” by Franz Kafka. It was quite an interesting read."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={"Oh, I’ve heard of that one. What did you think of it?"}
            usericon={"/chatspace/kafka.jpg"}
            name={"Kafka"}
          />
          <FriendMessage
            sender={false}
            message={
              "It was definitely thought-provoking. The transformation of the main character and how it affected his relationships with his family was really well-written."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              "That sounds like something I would enjoy. I’ll have to add it to my reading list."
            }
            usericon={"/chatspace/kafka.jpg"}
            name={"Kafka"}
          />
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
    );
  } else if (prevName === "Natasha") {
    content = (
      <div id="content-message-chatspace-selected">
        <div id="content-message-header-chatspace">
          <div id="content-message-info-chatspace">
            <span id="content-message-header-name-chatspace">Natasha</span>
            <span id="content-message-header-sub-chatspace">
              <br />
              Medicine is such an interesting field.
            </span>
          </div>
          <hr />
        </div>
        <div id="content-message-container-chatspace">
          <FriendMessage
            sender={true}
            message={"Hey Himeko, how’s it going?"}
            usericon={"/chatspace/Natasha.png"}
            name={"Natasha"}
          />
          <FriendMessage
            sender={false}
            message={"Hi Natasha, I’m doing well. How about you?"}
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              "I’m good too. I was just thinking about our training session yesterday."
            }
            usericon={"/chatspace/Natasha.png"}
            name={"Natasha"}
          />
          <FriendMessage
            sender={false}
            message={"Oh yeah? What were you thinking about?"}
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              " Just how much we’ve improved since we started training together."
            }
            usericon={"/chatspace/Natasha.png"}
            name={"Natasha"}
          />
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
    );
  } else if (prevName === "Serval") {
    content = (
      <div id="content-message-chatspace-selected">
        <div id="content-message-header-chatspace">
          <div id="content-message-info-chatspace">
            <span id="content-message-header-name-chatspace">Serval</span>
            <span id="content-message-header-sub-chatspace">
              <br />I love rock music so much!
            </span>
          </div>
          <hr />
        </div>
        <div id="content-message-container-chatspace">
          <FriendMessage
            sender={true}
            message={"Hey Himeko, how are you doing?"}
            usericon={"/chatspace/Serval.jpg"}
            name={"Serval"}
          />
          <FriendMessage
            sender={false}
            message={"Hi Serval, I’m doing well. How about you?"}
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              "I’m doing great! I’m actually having a concert next week and I wanted to invite you to come."
            }
            usericon={"/chatspace/Serval.jpg"}
            name={"Serval"}
          />
          <FriendMessage
            sender={false}
            message={
              "Oh wow, that sounds like so much fun! I would love to come."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={true}
            message={
              "Awesome! I’m so glad you can make it. It’s going to be a great show."
            }
            usericon={"/chatspace/Serval.jpg"}
            name={"Serval"}
          />
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
    );
  } else if (prevName === "Myself") {
    content = (
      <div id="content-message-chatspace-selected">
        <div id="content-message-header-chatspace">
          <div id="content-message-info-chatspace">
            <span id="content-message-header-name-chatspace">Myself</span>
            <span id="content-message-header-sub-chatspace">
              <br />
              Innovation for the future
            </span>
          </div>
          <hr />
        </div>
        <div id="content-message-container-chatspace">
          <FriendMessage
            sender={false}
            message={
              "Okay, let’s see. I need to remember to get some milk and eggs."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={false}
            message={"Oh, and I can’t forget the bread. I’m almost out."}
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={false}
            message={
              "Let’s see, what else do I need? Oh yeah, some fruits and vegetables."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={false}
            message={
              "And some chicken for dinner tonight. I think that should be everything."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
          <FriendMessage
            sender={false}
            message={
              "Wait, I almost forgot the coffee. Can’t start my day without that."
            }
            sendericon={"/chatspace/himeko.jpg"}
            name={"Himeko"}
          />
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
    );
  }
  return (
    <>
      <div id="stage-chatspace">
        <BackgroundChatSpace />
        <NavigationBar />
        <div id="outer-container-chatspace">
          <div id="inner-container-header-chatspace">
            <img id="icon-chatspace" src="/chatspace/icon.png" />
            <span id="icon-message-chatspace">Messages</span>
          </div>
          <div id="inner-container-content">
            <div id="scrollbar-friends-chatspace">
              <FriendsBox
                onClick={updateChatBoxId}
                name={"Seele"}
                picture={"/chatspace/seele.png"}
              />
              <FriendsBox
                onClick={updateChatBoxId}
                name={"Kafka"}
                picture={"/chatspace/kafka.jpg"}
              />
              <FriendsBox
                onClick={updateChatBoxId}
                name={"Natasha"}
                picture={"/chatspace/Natasha.png"}
              />
              <FriendsBox
                onClick={updateChatBoxId}
                name={"Serval"}
                picture={"/chatspace/Serval.jpg"}
              />
              <FriendsBox
                onClick={updateChatBoxId}
                name={"Myself"}
                picture={"/chatspace/himeko.jpg"}
              />
            </div>
            <div id="content-message-border-chatspace">
              {chatboxid ? (
                <div id="content-message-chatspace">
                  <img
                    id="content-message-icon-chatspace"
                    src="/chatspace/contacticon.png"
                    alt=""
                  />
                  <span id="contect-message-select-user-chatspace">
                    Please select a contact
                  </span>
                </div>
              ) : (
                content
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatSpace;
