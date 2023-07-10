  import "./chatspace.css";
  import React, { useState, useEffect } from "react";
  import FriendsBox from "./components/FriendsBox";
  import FriendMessage from "./components/FriendMessage";
  import NavigationBar from "../../components/navigation2/NavigationBar";
  import BackgroundChatSpace from "./background/BackgroundChatSpace";

  // FIREBASE LOGIN TEST
  import { initializeApp } from 'firebase/app';
  import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { getFirestore, collection, query, orderBy, limit, getDocs} from "firebase/firestore";
  import { useCollectionData } from "react-firebase-hooks/firestore";

  

  const firebaseConfig = {
    apiKey: "AIzaSyA5KuVKg7vp6OuIBMYSgbsxWizMZhqKNmw",
    authDomain: "orbit-90a9a.firebaseapp.com",
    projectId: "orbit-90a9a",
    storageBucket: "orbit-90a9a.appspot.com",
    messagingSenderId: "355762773896",
    appId: "1:355762773896:web:bd8c63fa6d57499427643d",
    measurementId: "G-PVEBSYX62E"
  }


  const firebase = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebase);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

      // FIREBASE CHAT TEST
      const messageRef = collection(firestore, "messages");
      const orderedQuery = query(messageRef, orderBy("createdAt"), limit(25));
    
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful authentication
        console.log(result.user);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

    function ChatSpace() {
    const [chatboxid, setChatBoxId] = useState(true);
    const [prevName, setPrevName] = useState("");


    const [messages] = useCollectionData(orderedQuery, { idField: 'id' });

    const updateChatBoxId = (name) => {
      setChatBoxId(false);
      setPrevName(name);
    };
    let content;
    if (prevName === "Seele") {
      content = (
        <div id="content-message-chatspace-selected">
          <div id="content-message-header-chatspace">
            <div id="content  -message-info-chatspace">
              <span id="content-message-header-name-chatspace">Seele</span>
              <span id="content-message-header-sub-chatspace">
                <br />
                If you have anything to say, spill it!
              </span>
            </div>
            <hr />
          </div>
          <div id="content-message-container-chatspace">
          {messages && messages.map((msg) => (
            <FriendMessage
            key={msg.id}
            sender={true}
            message={msg.text} // Access the specific property you want to render
            usericon={"/chatspace/seele.png"}
            name={"Seele"}
          />
          ))}
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
          <button onClick={signInWithGoogle}>Sign In with Google</button>
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
