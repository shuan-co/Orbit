import "./chatspace.css";
import React, { useState, useEffect } from "react";
import FriendsBox from "./components/FriendsBox";
import FriendMessage from "./components/FriendMessage";
import NavigationBar from "../../components/navigation2/NavigationBar";
import BackgroundChatSpace from "./background/BackgroundChatSpace";


import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { config, user } from "../../Firebase";

// material ui
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "21.5vw",
  backgroundColor: 'rgba(0, 0, 0, 0.17)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  padding: '16px',
};

//  FIRE STORE
import { doc, setDoc, getDoc } from "firebase/firestore";

// FIRE STORAGE
import { getDownloadURL, ref } from "firebase/storage";
const imagesRef = ref(config.storage, 'something/image.png');

async function getUID() {
  return await config.auth.currentUser.uid;
}

// Add User to conversations
const addUser = (event) => {
  const addUID = document.getElementById("content-message-add-user").value;
  const docRef = doc(config.firestore, addUID, "/friends");

  // Check if the addUID document exists
  getDoc(docRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Document exists, proceed with the getUID() function
        getUID()
          .then((uid) => {
            // Now you can add the documents to the corresponding collections

            // Check if uid/friends/conversations/addUID exists
            const conversationsRef1 = doc(config.firestore, uid, "/friends/conversations", addUID);
            const conversationsRef2 = doc(config.firestore, addUID, "/friends/conversations", uid);

            // Check if the conversation with addUID already exists
            getDoc(conversationsRef1)
              .then((conversationsSnapshot) => {
                if (conversationsSnapshot.exists()) {
                  console.log(`Conversation with ${addUID} already exists. No action taken.`);
                  // Handle the case when the conversation already exists.
                  // For example, show an error message or perform other actions as needed.
                } else {
                  // Conversations don't exist, create them
                  setDoc(conversationsRef1, {});
                  setDoc(conversationsRef2, {});
                  setDoc(doc(config.firestore, uid, "/friends"), { addUID: addUID })
                  setDoc(doc(config.firestore, addUID, "/friends"), { uid: uid })
                  console.log(`Conversation with ${addUID} created.`);
                }
              })
              .catch((error) => {
                console.error("Error checking conversation existence:", error);
              });
          })
          .catch((error) => {
            console.error("Error getting UID:", error);
          });
      } else {
        console.log(`Document with ID ${addUID} does not exist.`);
        // Handle the case when the document does not exist in the collection
        // For example, show an error message or perform other actions as needed.
      }
    })
    .catch((error) => {
      console.error("Error checking document existence:", error);
    });

  event.preventDefault(); // Prevent the default form submission
};

async function fetchFriendData(uid) {
  try {
    const friendRefData = doc(config.firestore, uid + "/data");
    const friendSnapshot = await getDoc(friendRefData);
    const friendData = friendSnapshot.data();
    console.log(friendData);
  } catch (error) {
    console.error("Error fetching data for UID:", uid, error);
  }
}


function ChatSpace() {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // // TEST IMAGE SHOW
  // const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   // Retrieve the image URL from Firebase Storage
  //   const storageRef = ref(config.storage, 'something/image.png');

  //   getDownloadURL(storageRef)
  //     .then((url) => {
  //       // Set the URL in the component's state
  //       setImageUrl(url);
  //       console.log(url);
  //     })
  //     .catch((error) => {
  //       // Handle any errors that occur during URL retrieval
  //       console.error(error);
  //     });
  // }, []);

  const [chatboxid, setChatBoxId] = useState(true);
  const [prevName, setPrevName] = useState("");

  //  Retrieve Messages
  const messageRef = collection(config.firestore, "messages");
  const orderedQuery = query(messageRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(orderedQuery, { idField: 'id' });

  // Retrieve friends
  const friendRef = collection(config.firestore, JSON.parse(localStorage.getItem('user')).credentials.uid);
  const friendOrderQuery = query(friendRef);
  const [friends] = useCollectionData(friendOrderQuery);

  // Get Friend UID
  const friendsUID = [];
  try {
    for (const key in friends[1]) {
      friendsUID.push(friends[1][key])
    }
  } catch (error) {

  }

  // Get Friend Names
  const friendData = [];

  useEffect(() => {
    // Loop through each UID in friendsUID and call the fetchFriendData function
    for (const uid in friendsUID) {
      fetchFriendData(friendsUID[uid]);
    }
  }, [friendsUID]); // This useEffect will run whenever friendsUID changes




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
      {/* MODAL DIV, FOR ADDING CONVERSIONS */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={addUser}>
              <input type="text" placeholder="User Identification" id="content-message-add-user" style={{ width: "20vw", border: "none", borderRadius: "0px" }} />
            </form>
          </Box>
        </Fade>
      </Modal>



      <div id="stage-chatspace">
        <BackgroundChatSpace />
        <NavigationBar />
        {/* <img src={imageUrl} /> */}
        {/* <button onClick={signInWithGoogle}>Sign In with Google</button> */}
        <div id="outer-container-chatspace">
          <div id="inner-container-header-chatspace">
            <img id="icon-chatspace" src="/chatspace/icon.png" />
            <span id="icon-message-chatspace">Messages</span>
          </div>
          <div id="inner-container-content">
            <div id="scrollbar-friends-chatspace">
              <FriendsBox
                onClick={handleOpen}
                name={"Find User"}
                picture={"/chatspace/add.png"}
              />
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
