import React, { useEffect, useState } from "react";
import "./navigationbar.css";

const NavigationBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExitButtonClicked, setIsExitButtonClicked] = useState(false);

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
    if (isExitButtonClicked && isVisible === false) {
      setIsExitButtonClicked(false);
    }
  }, [isExitButtonClicked, isVisible]);

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
                    src="./chatspace/himeko.jpg"
                    alt="himeko"
                  />
                </div>
                <div id="username_container">
                  <p className="userinfo">Himeko</p>
                </div>
                <div id="tagline_container">
                  <p className="userinfo">Innovation for the future</p>
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
                    <a id="saved_button" href="/savedvideos"></a>
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
