import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRocket, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function TopNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Orbit</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <NavDropdown 
                        title={
                            <div style={{display: "inline-block"}}>
                                <FontAwesomeIcon icon={faBell} /> Notifications
                            </div>
                        }
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item href="#" onClick={() => loadNotificationContent(1)}>Notification 1</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={() => loadNotificationContent(2)}>Notification 2</NavDropdown.Item>
                        <NavDropdown.Item href="#" onClick={() => loadNotificationContent(3)}>Notification 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/savedvideos">
                        <FontAwesomeIcon icon={faRocket} /> Reels
                    </Nav.Link>
                    <Nav.Link href="/chatspace" onClick={() => loadContent('messages')}>
                        <FontAwesomeIcon icon={faEnvelope} /> Messages
                    </Nav.Link>
                    <Nav.Link href="#" onClick={() => loadContent('settings')}>
                        <FontAwesomeIcon icon={faCog} /> Settings
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default TopNavbar;

// Dummy functions for demonstration purposes
// You'll need to replace these with your actual implementation
function loadNotificationContent(id) {
    console.log(`Loading notification content for ${id}`);
}

function loadContent(page) {
    console.log(`Loading content for ${page}`);
}
