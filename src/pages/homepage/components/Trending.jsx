import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import './Trending.css';

function Trending() {
    // Assume you get this data from your server
    const trendingTopics = [
        {
            title: 'Trending in tech',
            text: '#AI',
            stats: '25.2K Tweets',
        },
        // ... other topics
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
