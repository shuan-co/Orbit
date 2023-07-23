import React, { useState, useEffect } from 'react';
import { Button, Form, Modal, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';
import './Feed.css';
import { db } from '../../../firebase/Firebase';
import { collection, addDoc, getDocs, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Feed({ posts: initialPosts = [], currentUser, deletePost }) {
    const [postModalShow, setPostModalShow] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [modalPostTitle, setModalPostTitle] = useState('');
    const [modalPostText, setModalPostText] = useState('');
    const [posts, setPosts] = useState(initialPosts);
    const [viewedPost, setViewedPost] = useState(null);
    const [replyText, setReplyText] = useState('');

    const handleSubmitPost = async (event) => {
        console.log('testsubmit')
        event.preventDefault();
        const storage = getStorage();
    
        if(!currentUser) {
          console.error("Error adding document: No current user defined");
          return;
        }
      
        const fileInput = document.getElementById('post-media');
        const files = fileInput.files;
    
        const newPost = {
            id: Date.now(),
            title: postTitle,
            text: postText,
            author: {
              uid: currentUser.uid,
              firstname: currentUser.firstname,
              lastname: currentUser.lastname,
            },
            media: []
        };
        const uploadTasks = [];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
        
          const storageRef = ref(storage, 'posts/' + file.name);
        
          const uploadTask = uploadBytesResumable(storageRef, file);
        
          const uploadPromise = new Promise((resolve, reject) => {
            uploadTask.on('state_changed', 
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
              }, 
              (error) => {
                console.error("Error uploading file: ", error);
                reject(error);
              }, 
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
        
                  newPost.media.push({
                    type: file.type,
                    url: downloadURL
                  });
        
                  resolve();
                });
              }
            );
          });
        
          uploadTasks.push(uploadPromise);
        }
        
        try {
          await Promise.allSettled(uploadTasks);
        
          const docRef = await addDoc(collection(db, "posts"), newPost);
          console.log("Document written with ID: ", docRef.id);
          setPosts(oldPosts => [...oldPosts, {...newPost, id: docRef.id}]);
        } catch (e) {
          console.error("Error adding document: ", e);
        }     
      
        setPostTitle('');
        setPostText('');
      };
    
    const handleSubmitPostModal = async (event) => {
        event.preventDefault();
        const storage = getStorage();
        console.log('testsubmit')

        if(!currentUser) {
          console.error("Error adding document: No current user defined");
          return;
        }
      
        const fileInput = document.getElementById('post-media');
        const files = fileInput.files;
    
        const newPost = {
            id: Date.now(),
            title: modalPostTitle,
            text: modalPostText,
            author: {
              uid: currentUser.uid,
              firstname: currentUser.firstname,
              lastname: currentUser.lastname,
            },
            media: []
        };
        
        const uploadTasks = [];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
        
          const storageRef = ref(storage, 'posts/' + file.name);
        
          const uploadTask = uploadBytesResumable(storageRef, file);
        
          const uploadPromise = new Promise((resolve, reject) => {
            uploadTask.on('state_changed', 
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
              }, 
              (error) => {
                console.error("Error uploading file: ", error);
                reject(error);
              }, 
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  console.log('File available at', downloadURL);
        
                  newPost.media.push({
                    type: file.type,
                    url: downloadURL
                  });
        
                  resolve();
                });
              }
            );
          });
        
          uploadTasks.push(uploadPromise);
        }
        
        try {
          await Promise.allSettled(uploadTasks); 
        
          const docRef = await addDoc(collection(db, "posts"), newPost);
          console.log("Document written with ID: ", docRef.id);
          setPosts(oldPosts => [...oldPosts, {...newPost, id: docRef.id}]);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        setPostModalShow(false);
        setModalPostTitle('');
        setModalPostText('');
      };
    
    

    const submitReply = (event) => {
      event.preventDefault();
      console.log(`Submitted reply: ${replyText}`);
      setReplyText('');
  }; 

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    });
  
    return () => unsubscribe();
  }, []);

  

  const handlePostClick = (post) => {
    setViewedPost(post);
  };  

    return (
        <div>
            <div id="header">
                <h2>Home</h2>
                <div id="home-button-container" className="button-container">
                    <Button className="tab-button" onClick={() => loadContent('observe')}>Popular</Button>
                    <Button className="tab-button" onClick={() => loadContent('signals')}>Local Group</Button>
                </div>
            </div>
            <div id="notifications-buttons" style={{display: "none"}}>
                <Button className="tab-button" onClick={() => showHardcodedNotificationType('reply')}>Replies</Button>
                <Button className="tab-button" onClick={() => showHardcodedNotificationType('like')}>Likes</Button>
            </div>
            <div id="create-post-form">
                <Form id="post-form" onSubmit={handleSubmitPost}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Any topics in mind?" required
                            value={postTitle} onChange={(e) => setPostTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows={3} placeholder="Share more to the world!" required
                            value={postText} onChange={(e) => setPostText(e.target.value)}
                        />
                    </Form.Group>
                    <InputGroup>
                        <Form.Label htmlFor="post-media" className="btn btn-light">
                            <FontAwesomeIcon icon={faImage} />
                        </Form.Label>
                        <Form.Control type="file" className="d-none" id="post-media" multiple />
                        <Button type="submit" className="btn btn-light ml-2">Submit</Button>
                    </InputGroup>
                </Form>
            </div>

            <div id="content-area">
            {posts.map(post =>
                <Post
                    key={post.id}
                    post={post}
                    onClick={() => handlePostClick(post)}
                    currentUser={currentUser}
                    handleDelete={() => deletePost(post.id)}
                />
            )}
            </div>

            

            <Modal show={postModalShow} onHide={() => setPostModalShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitPostModal}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Any topics in mind?" required
                                value={modalPostTitle} onChange={(e) => setModalPostTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows={3} placeholder="Share more to the world!" required
                                value={modalPostText} onChange={(e) => setModalPostText(e.target.value)}
                            />
                        </Form.Group>
                        <InputGroup>
                            <Form.Label htmlFor="post-modal-media" className="btn btn-light">
                                <FontAwesomeIcon icon={faImage} />
                            </Form.Label>
                            <Form.Control type="file" className="d-none" id="post-modal-media" multiple />
                            <Button type="submit" className="btn btn-light ml-2">Submit</Button>
                        </InputGroup>
                    </Form>
                </Modal.Body>
            </Modal>

            {viewedPost && (
                <Modal show={true} onHide={() => setViewedPost(null)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{viewedPost.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div id="post-content">
                            {viewedPost.text}
                        </div>
                        <Form id="reply-form" onSubmit={submitReply} style={{display:'none'}}>
                            <div className="form-group">
                                <label htmlFor="reply-text">Reply:</label>
                                <textarea className="form-control" id="reply-text" rows="3" required 
                                    value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={() => setViewedPost(null)}>Close</button>
                        <button type="button" className="btn btn-primary"><i className="fas fa-thumbs-up"></i></button>
                        <button type="button" className="btn btn-danger"><i className="fas fa-thumbs-down"></i></button>        
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Feed;

function loadContent(page) {
    console.log(`Loading content for ${page}`);
}

function showHardcodedNotificationType(type) {
    console.log(`Showing hardcoded notifications of type ${type}`);
}

function previewFilesModal() {
    console.log("Previewing files");
}
