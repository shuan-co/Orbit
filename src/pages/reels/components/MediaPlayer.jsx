import { Carousel } from 'react-bootstrap';
import { db } from '../../../firebase/Firebase'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "./MediaPlayer.css";

function MediaPlayer(){

        const [mediaArray, setMediaArray] = useState([]);

        // To connect to db
        useEffect(() => {
                const fetchPosts = async () => { // to fetch post data
                        try{
                                const posts = [];
                                const postsCollection = collection(db, "posts");
                                const snapshot = await getDocs(postsCollection);

                                snapshot.forEach((doc) => {

                                        if(doc.data().media.length > 0){
                                                // console.log(doc.data().media[0].type); // For debugging

                                                if(doc.data().media[0].type.includes('video')){
                                                        posts.push(doc);
                                                }
                                        }
                                });

                                setMediaArray(posts);
                                console.log('Posts retrieved');
                        }
                        catch(error){
                                console.log('Error: ', error);
                        }
                }

                fetchPosts();
        }, [])

        const carouselItems = [];
        for(let index = 0; index < mediaArray.length; index++){

                const post_author = mediaArray[index].data().author.firstname.concat(' ')
                .concat(mediaArray[index].data().author.lastname);

                carouselItems.push(
                        <Carousel.Item>
                                <ReactPlayer
                                        url={mediaArray[index].data().media[0].url}
                                        width="100%"
                                        height="75vh"
                                        pip={true}
                                        controls={true}
                                        playing={false}
                                        volume={0.5}
                                        loop={true}
                                />
                                <div className="carousel-caption">
                                                <h1 id="caption_title">{mediaArray[index].data().title}</h1>
                                                <h2 id="caption_info">{mediaArray[index].data().text}</h2>
                                                <h3 id="author_info">{post_author}</h3>
                                </div>
                        </Carousel.Item>
                );
        }

        return(
                <div id = "mediaplayer_div">
                        <Carousel id="player_carousel">
                                {carouselItems}
                        </Carousel>
                </div>
        );
};

export default MediaPlayer;
