import React from "react";
import "./friendsbox.css";

function FriendsBox({ onClick }) {
  const handleClick = () => {
    onClick(); // Invoke the onClick function passed as a prop
  };

  return (
    <>
      <div id="container-friendsbox" onClick={handleClick}>
        <img
          id="friends-icon-friendsbox"
          src="./chatspace/usericontest.jpg"
          alt=""
        />
        <span id="friends-username-friendsbox">Seele</span>
        <span id="friends-direction-friendsbox">&gt;</span>
      </div>
    </>
  );
}

export default FriendsBox;
