import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import { db } from '../../../firebase/Firebase';

function Explore() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCol = collection(db, 'users');
      const q = query(usersCol, limit(5));
      const querySnapshot = await getDocs(q);

      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "5vh" }}>
      <h2>Explore</h2>
      {users.length > 0 ? (
        users.map(user => (
          <Card className="mb-3" key={user.id}>
            <Card.Body>
              <Card.Title>{user.firstname}</Card.Title> {/* Use firstname instead of username */}
              <Card.Link href={`/profile/${user.id}`}>View Profile</Card.Link> {/* Use id instead of username */}
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