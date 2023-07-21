import React from 'react';
import { Card } from 'react-bootstrap';

function Explore() {
  const users = [
    { username: 'user1' },
    { username: 'user2' },
    { username: 'user3' }
  ];

  return (
    <div style={{ width: "100%", marginTop: "5vh" }}>
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
  );
}

export default Explore;
