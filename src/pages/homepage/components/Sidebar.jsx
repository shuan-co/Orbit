import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRocket, faUser, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

function Sidebar({ setPostModalShow, setActivePage }) {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <Button variant="primary" className="sidebar-button" onClick={() => setActivePage("feed")}>
                    <FontAwesomeIcon icon={faHome} /> Home
                </Button>
                <Button variant="primary" className="sidebar-button" onClick={() => setActivePage("explore")}>
                    <FontAwesomeIcon icon={faRocket} /> Explore
                </Button>
                <Button variant="primary" className="sidebar-button" onClick={() => setActivePage("profile")}>
                    <FontAwesomeIcon icon={faUser} /> Profile
                </Button>
                <Button variant="primary" className="sidebar-button" onClick={() => { loadContent('notifications'); showAllHardcodedNotifications(); }}>
                    <FontAwesomeIcon icon={faBell} /> Notifications
                </Button>
                <Button variant="success" className="sidebar-button" onClick={() => setPostModalShow(true)}>
                    <FontAwesomeIcon icon={faPlus} /> Create
                </Button>
                <div style={{ position: "absolute", bottom: "150px", left: "50px", display: "flex", alignItems: "center" }}>
                    <img id="sidebar-profile-picture" src="himeko.jpg" alt="Profile Picture" style={{ width: "75px", height: "75px", borderRadius: "50%", marginRight: "10px" }} />
                    <p id="sidebar-username" style={{ fontSize: "xx-large" }}>Himeko</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

// Dummy functions for demonstration purposes
// You'll need to replace these with your actual implementation
function loadContent(page) {
    console.log(`Loading content for ${page}`);
}

function showAllHardcodedNotifications() {
    console.log("Showing all hardcoded notifications");
}