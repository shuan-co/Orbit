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

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavigationBar from '../../components/navigation2/NavigationBar.jsx';

function Homepage() {
    const [currentUser, setCurrentUser] = useState(null);
    const [activePage, setActivePage] = useState("feed");

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserDocument(user).then(fullUser => {
                    if (fullUser) {
                        setCurrentUser(fullUser);
                    } else {
                        console.log('No such user!');
                    }
                });
            } else {
                setCurrentUser(null);
            }
        });
    
        return () => unsubscribe();
    }, []);
    
    async function fetchUserDocument(user) {
        console.log("User object:", user);
    
        const db = getFirestore();
        const userRef = doc(db, user.uid, 'data');
        console.log("Fetching user doc for uid:", user.uid);
        const userDoc = await getDoc(userRef);
        console.log("Fetched user doc:", userDoc);
        console.log("Fetched user doc data:", userDoc.data());
    
        if (userDoc.exists()) {
            const fullUser = { 
                uid: user.uid, 
                email: user.email, 
                ...userDoc.data() 
            };
            return fullUser;
        } else {
            return null;
        }
    }          

    let MainContent;
    switch (activePage) {
        case "feed":
            MainContent = <Feed currentUser={currentUser} />;
            break;
        case "explore":
            MainContent = <Explore />;
            break;
        case "profile":
            MainContent = <Profile user={currentUser} />;
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
                           <Sidebar currentUser={currentUser} setActivePage={setActivePage} />
                        </Col>
                        <Col xs={8}>
                            {MainContent}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Homepage;
