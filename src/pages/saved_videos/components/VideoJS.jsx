import React from 'react';
import VideoPlayer from 'react-video-js-player';
import seele_clip from "../assets/sample_videos/seele_clip.mp4";

const VideoJS = () => {
        const videoSrc = seele_clip;
        const poster = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmobilematters.gg%2Fgaming%2Fhonkai-star-rail-seele-best-build&psig=AOvVaw36UQG9XGre_2fYZy8bRU_q&ust=1687613057254000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDh7Ne-2f8CFQAAAAAdAAAAABAU";


        return(
                <div className = "App">
                        <h1>VideoJS</h1>
                        <VideoPlayer
                                src={videoSrc}
                                poster={poster}
                                width="720"
                                height="420"
                        />
                </div>
        );
};

export default VideoJS;
