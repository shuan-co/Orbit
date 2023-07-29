import { Carousel } from 'react-bootstrap';
import { db } from '../../../firebase/Firebase'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import "./MediaPlayer.css";

let mediaType = [];
let mediaURLs = [];
let author_name = [];
let captions = [];

function MediaPlayer(){
        const [mediaArray, setMediaArray] = useState([]);
        const [authorsArray, setauthorsArray] = useState([]);
        const [captionsArray, setCaptionsArray] = useState([]);
        const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
                mediaURLs.length = 0;
                mediaType.length = 0;
                const fetchMediaData = async () => {

                        try{
                                const mediaData = [];
                                const postsCollection = collection(db, "posts");
                                const snapshot = await getDocs(postsCollection);

                                snapshot.forEach((doc) =>{
                                        const media = doc.data().media;
                                        mediaData.push(...media);
                                });

                                setMediaArray(mediaData);

                                // To display elements to log and to get types
                                mediaData.forEach((mediaItem, index) =>{
                                        console.log(`Element ${index} is of type ${mediaItem.type}:`, mediaItem);
                                        mediaType.push(mediaItem.type);
                                        mediaURLs.push(mediaItem.url);
                                });

                                console.log("Number of medias: ", mediaData.length); // To get length of data
                                console.log("Number of datatypes: ", mediaType.length); // To get length of types of media

                        }

                        catch(error){
                                console.log('Error: ', error);
                        };
                }

                fetchMediaData();

                const fetchAuthorData = async () => {

                        try{
                                const authorData = [];
                                const postsCollection = collection(db, "posts");
                                const snapshot = await getDocs(postsCollection);
                                const author_first_names = [];
                                const author_last_names = [];

                                snapshot.forEach((doc) =>{
                                        const author = doc.data().author;
                                        authorData.push(author);
                                });

                                setauthorsArray(authorData);

                                // To display elements to log and to get types
                                authorData.forEach((authorItem, index) =>{
                                        author_first_names.push(authorItem.firstname);
                                        author_last_names.push(authorItem.lastname);
                                        author_name.push(authorItem.firstname + " " + authorItem.lastname);
                                        console.log(authorItem.firstname + " " + authorItem.lastname);
                                });

                                console.log("Number of authors: ", authorData.length); // To get length of data


                        }

                        catch(error){
                                console.log('Error: ', error);
                        };
                }

                fetchAuthorData();

                const fetchCaptionData = async () => {

                        try{
                                const captionData = [];
                                const postsCollection = collection(db, "posts");
                                const snapshot = await getDocs(postsCollection);

                                snapshot.forEach((doc) =>{
                                        const caption = doc.data().text;
                                        captionData.push(caption);
                                });

                                setCaptionsArray(captionData);

                                // To display elements to log and to get types
                                captionData.forEach((captionItem, index) =>{
                                        captions.push(captionItem);
                                });

                                console.log("Number of captions: ", captionData.length); // To get length of data
                        }

                        catch(error){
                                console.log('Error: ', error);
                        };
                }

                fetchCaptionData();
        }, []);

        const carouselItems = [];
        for(let index = 0; index < mediaURLs.length; index++){
                if(mediaType[index].toLowerCase().includes("video")){
                        console.log(index, mediaURLs[index], mediaType[index])

                        const config = {
                                attributes: {
                                  disablePictureInPicture: true,
                                  controlsList: 'nodownload'
                                }
                              };


                        carouselItems.push(
                                <Carousel.Item>
                                        <ReactPlayer
                                                url={mediaURLs[index]}
                                                width="100%"
                                                height="75vh"
                                                pip={true}
                                                controls={true}
                                                playing={false}
                                                volume={0.5}
                                                loop={true}
                                                config={config}
                                        />
                                        <div class="carousel-caption">
                                                <h2 id="caption_info">{captions[index]}</h2>
                                                <h3 id="author_info">Posted by: {author_name[index]}</h3>
                                        </div>
                                </Carousel.Item>
                        );
                }
                else{
                        console.log("Invalid type")
                }
        }

        return(
                <div mediaplayer_div>
                        <Carousel id="player_carousel">
                                {carouselItems}
                        </Carousel>
                </div>
        );
};

export default MediaPlayer
