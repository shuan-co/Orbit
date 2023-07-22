import "./friendmessage.css";

function FriendMessage({ sender, message, usericon, sendericon, name }) {
  return (
    <>
      {sender ? (
        <div id="container-message-FriendMessage">
          <img id="message-icon-FriendMessage" src={"/chatspace/add.png"} alt="" />
          <div id="message-info-FriendMessage">
            <p id="message-name-FriendMessage">{name}</p>
            <div id="message-chatbubble-FriendMessage">
              <p id="message-sent-FriendMessage" style={{ color: "black" }}>{message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div id="container-message-FriendMessage-sender">
          <div id="message-info-FriendMessage">
            <p id="message-name-FriendMessage-user">{name}</p>
            <div id="message-chatbubble-FriendMessage-user">
              <p id="message-sent-FriendMessage" style={{ color: "black" }}>{message}</p>
            </div>
          </div>
          <img id="message-icon-FriendMessage-user" src={"/chatspace/add.png"} alt="" />
        </div>
      )}
    </>
  );
}

export default FriendMessage;
