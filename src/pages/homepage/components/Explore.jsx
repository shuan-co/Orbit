import React from 'react';
import { Card } from 'react-bootstrap';
import Sidebar from './Sidebar';

function Explore() {
  // Simulated list of users. In a real application, this data would likely be fetched from an API.
  const users = [
    { username: 'user1' },
    { username: 'user2' },
    { username: 'user3' }
  ];

  return (
    <div style={{ display: "flex", gap: "5vw" }}>
      <Sidebar />
      <div style={{ width: "80vw", marginTop: "5vh" }}>
        <h2>Explore</h2>
        {users.length > 0 ? (
          users.map(user => (
            <Card className="mb-3" key={user.username}>
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Link href={`/profile/${user.username}`}>View Profile</Card.Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </div>
  );
}

export default Explore;
