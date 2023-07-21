import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Feed from './components/Feed.jsx';
import Trending from './components/Trending.jsx';
import Profile from './components/Profile.jsx';
import Explore from './components/Explore.jsx';
import Notifications from './components/Notifications.jsx';
import './homepage.css';

import { getAuth, onAuthStateChanged } from "firebase/auth";

function Homepage() {
    const [currentUser, setCurrentUser] = useState(null);
    
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });
        
        return () => unsubscribe();
    }, []);
    
    return (
        <div>
            <TopNavbar />
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <Sidebar />
                    </Col>
                    <Col xs={6}>
                        <Feed currentUser={currentUser} />
                    </Col>
                    <Col xs={3}>
                        <Trending />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;
