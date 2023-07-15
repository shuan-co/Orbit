import React from 'react';

function Profile({ user }) {
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={user.profilePictureUrl} alt="Profile Picture" style={{ marginRight: '10px', width: '100px', height: '100px', borderRadius: '50%' }} />
        <h2>{user.username}'s Profile</h2>
      </div>
      {user.posts && user.posts.length > 0 ? user.posts.map(post => 
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            {post.media.map(media => media.type.startsWith('image') ? 
              <img key={media.url} src={media.url} className="img-fluid" /> : 
              <video key={media.url} src={media.url} controls className="img-fluid" />
            )}
            <p className="card-text">{post.text}</p>
            {user.username === currentUser && <button className="btn btn-danger">Delete</button>}
          </div>
        </div>
      ) : <p>No posts available.</p>}
    </div>
  );
}

export default Profile;
