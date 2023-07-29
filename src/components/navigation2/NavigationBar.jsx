import React, { useEffect, useState } from "react";
import "./navigationbar.css";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExitButtonClicked, setIsExitButtonClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" || isExitButtonClicked) {
        setIsVisible((prevVisible) => !prevVisible);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExitButtonClicked]);

  const handleExitButtonClick = () => {
    setIsExitButtonClicked(true);
    setIsVisible(false);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            fetchUserDocument(user).then(fullUser => {
                if (fullUser) {
                    setCurrentUser(fullUser);
                } else {
                    console.log('No such user!');
                }
            });
        } else {
            setCurrentUser(null);
        }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isExitButtonClicked && isVisible === false) {
      setIsExitButtonClicked(false);
    }
  }, [isExitButtonClicked, isVisible]);

  async function fetchUserDocument(user) {
    console.log("User object:", user);

    const db = getFirestore();
    const userRef = doc(db, user.uid, 'data');
    console.log("Fetching user doc for uid:", user.uid);
    const userDoc = await getDoc(userRef);
    console.log("Fetched user doc:", userDoc);
    console.log("Fetched user doc data:", userDoc.data());

    if (userDoc.exists()) {
        const fullUser = {
            uid: user.uid,
            email: user.email,
            ...userDoc.data()
        };
        return fullUser;
    } else {
        return null;
    }
  }
  return (
    <div id="body-navigationbar">
      {isVisible && (
        <div>
          <title>test_site</title>
          <link
            rel="stylesheet"
            type="text/css"
            media="all"
            href="navigationbar.css"
          />
          <div id="nav_container" className="nav_container">
            <div id="nav_topbar">
              <div id="topb_tophalf">
                <div id="profileimg_container">
                  <img
                    id="profile_image"
                    src="./saved_videos/profile_pictures/Profile_Picture_Peppy.png"
                    alt="pfp"
                  />
                </div>
                <div id="username_container">
                  <p className="userinfo">{`${currentUser.firstname} ${currentUser.lastname}`}</p>
                </div>
                <div id="tagline_container">
                  <p className="userinfo">Test</p>
                </div>
              </div>
              <div id="topb_bothalf">
                <div id="bio_container">
                  <p id="bio">No bio</p>{" "}
                  {/*NOTE: Placeholder only, create seperate div for actual text display*/}
                </div>
              </div>
            </div>
            <div id="sidebar_container">
              <div id="centering">
                <div id="exitbutt_container">
                  <button id="exit_button" onClick={handleExitButtonClick} />
                </div>
                <div id="sidebar">
                  <div className="sidebar_icon">
                    <div className="sidebar_button">
                      <button id="emails" /> {/*TODO: Implement routing */}
                    </div>
                  </div>
                  <div className="sidebar_icon">
                    <div className="sidebar_button">
                      <button id="events" /> {/*TODO: Implement routing */}
                    </div>
                  </div>
                  <div className="sidebar_icon">
                    <div className="sidebar_button">
                      <button id="settings" /> {/*TODO: Implement routing */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="nav_itemsspane">
              <div id="dest_container">
                <span className="itembox">
                  <div className="nav_button">
                    <a id="main_button" href="../../../"></a>
                  </div>
                  <div className="nav_label">
                    <p className="nav_labeltext">Main</p>
                  </div>
                </span>
                <span className="itembox">
                  <div className="nav_button">
                    <a id="chat_button" href="../../../chatspace"></a>
                  </div>
                  <div className="nav_label">
                    <p className="nav_labeltext">Chat</p>
                  </div>
                </span>
                <span className="itembox">
                  <div className="nav_button">
                    <a id="home_button" href="../../../homepage"></a>
                  </div>
                  <div className="nav_label">
                    <p className="nav_labeltext">Home</p>
                  </div>
                </span>
                <span className="itembox">
                  <div className="nav_button">
                    <a id="saved_button" href="/reels"></a>
                  </div>
                  <div className="nav_label">
                    <p className="nav_labeltext">Reels</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
