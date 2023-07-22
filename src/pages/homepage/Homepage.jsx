import React, { useState, useEffect } from 'react';
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
import NavigationBar from '../../components/navigation2/NavigationBar.jsx';

function Homepage() {
    const [currentUser, setCurrentUser] = useState(null);
    const [activePage, setActivePage] = useState("feed");

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

    let MainContent;
    switch (activePage) {
        case "feed":
            MainContent = <Feed currentUser={currentUser} />;
            break;
        case "explore":
            MainContent = <Explore />;
            break;
        case "profile":
            MainContent = <Profile />;
            break;
        default:
            MainContent = <Feed currentUser={currentUser} />;
            break;
    }

    return (
        <div>
            <NavigationBar />
            <TopNavbar />
            <div style={{ overflowY: 'auto' }}>
                <Container fluid>
                    <Row>
                        <Col xs={3} className="sidebar-sticky">
                            <Sidebar setActivePage={setActivePage} />
                        </Col>
                        <Col xs={6}>
                            {MainContent}
                        </Col>
                        <Col xs={3}>
                            <Trending />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Homepage;
