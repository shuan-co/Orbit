import "./reels.css";
import React, { useState, useEffect } from 'react';

import NavigationBar from '../../components/navigation2/NavigationBar.jsx';
import MediaPlayer from './components/MediaPlayer.jsx';

let author_name = [];
function Reels(){

        return(
                <div className="reels_content_panel">
                        <NavigationBar />
                        <MediaPlayer />

                </div>
        );
}


export default Reels;
