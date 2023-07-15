import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Post({ post, onClick, currentUser, handleDelete }) {
    const { title, text, media, author } = post;

    const mediaElements = media && media.map((mediaFile, index) => {
        if (mediaFile.type.startsWith('image')) {
            return <img key={index} src={mediaFile.url} className="img-fluid" alt="" />;
        } else if (mediaFile.type.startsWith('video')) {
            return (
                <video key={index} src={mediaFile.url} controls className="img-fluid">
                    Your browser does not support the video tag.
                </video>
            );
        } else {
            return null;
        }
    });

    return (
        <div onClick={onClick} className="post">
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {mediaElements}
                    <Card.Text>{text}</Card.Text>
                    <p>Posted by: <a href="#">{author}</a></p>
                    {author === currentUser ? <Button variant="danger" onClick={handleDelete}>Delete</Button> : null}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;
