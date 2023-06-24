import React from "react";
import "./friendsbox.css";

function FriendsBox({ onClick, name, picture }) {
  const handleClick = () => {
    onClick(name); // Invoke the onClick function passed as a prop
  };

  return (
    <>
      <div id="container-friendsbox" onClick={handleClick}>
        <img id="friends-icon-friendsbox" src={picture} alt="" />
        <span id="friends-username-friendsbox">{name}</span>
        <span id="friends-direction-friendsbox">&gt;</span>
      </div>
    </>
  );
}

export default FriendsBox;
