import "./friendmessage.css";

function FriendMessage({ sender }) {
  return (
    <>
      {sender ? (
        <div id="container-message-FriendMessage">
          <img
            id="message-icon-FriendMessage"
            src="./chatspace/usericontest.jpg"
            alt=""
          />
          <div id="message-info-FriendMessage">
            <p id="message-name-FriendMessage">Seele</p>
            <div id="message-chatbubble-FriendMessage">
              <p id="message-sent-FriendMessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                impedit soluta illum aut sit assumenda similique odio vitae
                laboriosam eos facilis ab autem doloremque atque. Odio sed
                adipisci nobis soluta?
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div id="container-message-FriendMessage-sender">
          <div id="message-info-FriendMessage">
            <p id="message-name-FriendMessage-user">Seele</p>
            <div id="message-chatbubble-FriendMessage-user">
              <p id="message-sent-FriendMessage">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                impedit soluta illum aut sit assumenda similique odio vitae
                laboriosam eos facilis ab autem doloremque atque. Odio sed
                adipisci nobis soluta?
              </p>
            </div>
          </div>
          <img
            id="message-icon-FriendMessage-user"
            src="./chatspace/usericontest.jpg"
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default FriendMessage;
