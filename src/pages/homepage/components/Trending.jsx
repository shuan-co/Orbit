import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import './Trending.css';

function Trending() {
    const trendingTopics = [
        {
            title: 'Trending in tech',
            text: '#Orbit',
            stats: '20 hits',
        },
    ];

    return (
        <div className="trending-topics-container">
            <h4>Trending</h4>
            <ListGroup id="trending-topics">
                {trendingTopics.map((topic, index) => (
                    <ListGroup.Item key={index} className="trending-topic">
                        <div className="trending-topic-content">
                            <p className="trending-topic-title">{topic.title}</p>
                            <p className="trending-topic-text">{topic.text}</p>
                            <p className="trending-topic-stats">{topic.stats}</p>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default Trending;
