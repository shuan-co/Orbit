import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { faReply, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const notificationsData = [
  { type: 'reply', user: 'Seele' },
  { type: 'reply', user: 'Serval' },
];

function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>
      <ListGroup>
        {notificationsData.map((notification, index) => (
          <ListGroup.Item key={index}>
            <FontAwesomeIcon icon={notification.type === 'reply' ? faReply : faHeart} />
            <strong>{notification.user}</strong> {notification.type === 'reply' ? 'replied to your post' : 'liked your post'}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Notifications;
