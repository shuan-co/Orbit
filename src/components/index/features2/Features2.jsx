import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./features2.css";

function Features2() {
  const [homePage, setHomePage] = useState(false);

  const homePageOpen = () => {
    setHomePage(true);
  };

  const homePageClose = () => {
    setHomePage(false);
  };

  const [reels, setReels] = useState(false);

  const openReels = () => {
    setReels(true);
  };

  const closeReels = () => {
    setReels(false);
  };

  const [chat, setChat] = useState(false);

  const openChat = () => {
    setChat(true);
  };

  const closeChat = () => {
    setChat(false);
  };

  return (
    <>
      <div id="container-features2">
        <div id="card-features2">
          <span></span>
          <div id="information-features2">
            <h2>Home Page</h2>
            <p>
              The home page acts as a personal planet where users can express
              their thoughts through various media and customize it to reflect
              their unique identity, while sharing their posts with others
              through the reels functionality.
            </p>
            <button onClick={homePageOpen}>Read more</button>
          </div>
        </div>
        <div id="card-features2">
          <span></span>
          <div id="information-features2">
            <h2>Reels</h2>
            <p>
              The reels section serves as interstellar warps, transporting users
              to explore diverse content beyond videos, resembling a journey
              through various users' distinct home planets based on their
              preferences.
            </p>
            <button onClick={openReels}>Read more</button>
          </div>
        </div>
        <div id="card-features2">
          <span></span>
          <div id="information-features2">
            <h2>Chat</h2>
            <p>
              The chat feature facilitates interstellar communication, allowing
              users to interact and socialize with other planet owners, creating
              a dedicated space for connection and engagement.
            </p>
            <button onClick={openChat}>Read more</button>
          </div>
        </div>
      </div>

      <Modal open={homePage} onClose={homePageClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            "-webkit-backdrop-filter": "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h1 id="main-modal-features2">Home Page</h1>
          <h4 id="sub-modal-features2">
            The home page serves as a personal planet for users, offering a
            platform to express their thoughts through various media and fully
            customize their digital space to reflect their unique identity. Each
            post shared on the home page has the opportunity to be showcased in
            the reels, creating a captivating journey through a diverse range of
            content from other users' home planets. <br />
            <br /> This fusion of customization and the reels functionality
            enables users to explore, connect, and engage with a community that
            shares their interests while experiencing the richness and diversity
            of creative expressions from different perspectives. It's a virtual
            universe where users can truly express themselves and forge
            meaningful connections in an ever-expanding cosmos of shared
            experiences.
          </h4>
        </Box>
      </Modal>
      <Modal open={reels} onClose={closeReels}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            "-webkit-backdrop-filter": "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h1 id="main-modal-features2">Reels</h1>
          <h4 id="sub-modal-features2">
            The reels section serves as interstellar warps, transporting users
            to explore a wide range of diverse content beyond videos. This
            captivating journey allows users to discover and immerse themselves
            in the distinct home planets of other users, showcasing their unique
            expressions and perspectives. The reels experience is customized
            through a recommendation algorithm that incorporates object
            detection and sentiment analysis. By analyzing the content of each
            post, the algorithm identifies objects, themes, and emotional tones,
            curating a personalized selection of reels that align with users'
            preferences and interests. <br /> <br /> To make the reels
            experience more enjoyable and engaging, a quirky UI is implemented.
            The user interface features playful and visually appealing elements,
            including animated characters, vibrant colors, and interactive
            features. This whimsical design adds a touch of fun and excitement,
            enhancing the overall browsing experience. Additionally,
            gamification elements may be incorporated, such as earning rewards
            or unlocking achievements, to further incentivize users to explore
            and interact with the reels. The combination of the recommendation
            algorithm's customization capabilities and the quirky UI creates a
            dynamic and immersive reels experience, inviting users to embark on
            an exciting journey through a galaxy of captivating content.
          </h4>
        </Box>
      </Modal>
      <Modal open={chat} onClose={closeChat}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            height: "auto",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            "-webkit-backdrop-filter": "blur(10px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h1 id="main-modal-features2">Chat</h1>
          <h4 id="sub-modal-features2">
            The user interface in the reels section is designed with a cute game
            style, aiming to make chatting a more interactive and fun
            experience. The UI incorporates charming and adorable graphics,
            featuring animated characters, cute icons, and vibrant colors that
            create a visually appealing and inviting atmosphere. This cute
            game-inspired design brings a sense of delight and playfulness to
            the chat interface, making conversations feel like an engaging and
            entertaining game. <br /> <br /> To enhance interactivity, the UI
            includes various interactive elements that make chatting more
            enjoyable. Users can express themselves with animated emojis or
            stickers, adding a touch of liveliness and personality to their
            messages. The ability to customize avatars or chat bubbles with
            adorable and quirky accessories allows users to showcase their
            creativity and unique style. Moreover, integrating interactive
            mini-games or challenges within the chat interface provides shared
            activities for users to participate in together, fostering a sense
            of connection and camaraderie. These interactive elements turn
            chatting into an immersive and interactive experience, where users
            can have fun, express themselves creatively, and form bonds through
            engaging interactions.
          </h4>
        </Box>
      </Modal>
    </>
  );
}

export default Features2;
