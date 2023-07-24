import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/Firebase';

function Profile({ user, currentUser }) {
  const [userPosts, setUserPosts] = useState([]);
  
  useEffect(() => {
    if (!user || !user.uid) return;

    const getPostsByUser = async () => {
      const postsCol = collection(db, 'posts');
      const q = query(postsCol, where('author.uid', '==', user.uid));
      const querySnapshot = await getDocs(q);

      setUserPosts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    getPostsByUser();
  }, [user]);

  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={user.profilePictureUrl} alt="Profile Picture" style={{ marginRight: '10px', width: '100px', height: '100px', borderRadius: '50%' }} />
        <h2>{`${user.firstname} ${user.lastname}'s Profile`}</h2>
      </div>
      {userPosts.length > 0 ? userPosts.map(post => 
        post.author && <div key={post.id} className="card mb-3">
         <div className="card-body">
           <h5 className="card-title">{post.title}</h5>
           {post.media && post.media.map(media => media.type.startsWith('image') ? 
             <img key={media.url} src={media.url} className="img-fluid" /> : 
             <video key={media.url} src={media.url} controls className="img-fluid" />
           )}
           <p className="card-text">{post.text}</p>
          {user.uid === post.author.uid && <button className="btn btn-danger">Delete</button>}
          </div>
         </div>
      ) : <p>No posts available.</p>}
    </div>
  );
}

export default Profile;
