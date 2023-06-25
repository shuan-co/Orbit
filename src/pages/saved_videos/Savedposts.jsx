import "./sp_css.css";
import NavigationBar from "../../components/navigation2/NavigationBar";
import React, { useState } from "react";
import { useEffect } from "react";

function Savedposts() {
  const names = ["Seele", "Kafka", "Natasha", "Serval", "Himeko"];
  const imageDirectories = [
    "/chatspace/seele.png",
    "/chatspace/kafka.jpg",
    "/chatspace/Natasha.png",
    "/chatspace/Serval.jpg",
    "himeko.jpg",
  ];

  const videoDirectories = [
    "/saved_videos/sample_videos/bailu_clip.mp4",
    "/saved_videos/sample_videos/clara_clip.mp4",
    "/saved_videos/sample_videos/himeko_clip.mp4",
    "/saved_videos/sample_videos/seele_clip.mp4",
    "/saved_videos/sample_videos/tb_clip.mp4",
  ];

  const [i, setI] = useState(0);
  const [userIcon, setIcon] = useState(imageDirectories[i]);
  const [name, setName] = useState(names[i]);
  const [userVideo, setVideo] = useState(videoDirectories[i]);

  const handleSetName = () => {
    setI((prevI) => (prevI >= names.length - 1 ? 0 : prevI + 1));
  };

  const handleSetNameReverse = () => {
    setI((prevI) => (prevI <= 0 ? 4 : prevI - 1));
  };

  useEffect(() => {
    setName(names[i]);
    setIcon(imageDirectories[i]);
    setVideo(videoDirectories[i]);
  }, [i]);

  return (
    <>
      <div id="body-savedposts">
        <NavigationBar />
        <div id="viewer_window" className="center">
          <div id="left_arrow_box">
            <div id="left_arrow">
              <button onClick={handleSetNameReverse} id="left_button"></button>
            </div>
          </div>
          <div id="post_box">
            <div id="content">
              <video
                id="background-opening"
                src={userVideo}
                style={{ zIndex: "10" }}
                controls
              ></video>
            </div>
            <div id="poster">
              <div id="profile_frame">
                <img id="profile_img" src={userIcon}></img>
              </div>
              <div id="user_info">
                <div id="user_caption"></div>
                <div id="user_name">{name}</div>
              </div>
              <div id="viewer_options">
                <div id="like_box">
                  <button id="like"></button>
                </div>
                <div id="dislike_box">
                  <button id="dislike"></button>
                </div>
                <div id="comment_box">
                  <button id="comment"></button>
                </div>
                <div id="share_box">
                  <button id="share"></button>
                </div>
                <div id="report_box">
                  <button id="report"></button>
                </div>
              </div>
            </div>
          </div>
          <div id="right_arrow_box">
            <div id="right_arrow">
              <button onClick={handleSetName} id="right_button"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Savedposts;
