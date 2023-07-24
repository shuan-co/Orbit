import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/Firebase';

function Explore() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userUIDsDoc = await getDoc(doc(db, 'meta', 'userUIDs'));
      const userUIDs = userUIDsDoc.data().uids;

      const fetchedUsers = [];
      for (const uid of userUIDs) {
        const userDoc = await getDoc(doc(db, uid, 'data'));
        fetchedUsers.push({ id: uid, ...userDoc.data() });
      }

      setUsers(fetchedUsers);
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
              <Card.Title>{user.firstname}</Card.Title> {}
              <Card.Link href={`/profile/${user.id}`}>View Profile</Card.Link> {}
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