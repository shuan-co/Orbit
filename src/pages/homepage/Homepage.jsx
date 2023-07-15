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

function Homepage() {
  return (
    <div>
      <TopNavbar />
      <Container fluid>
        <Row>
          <Col xs={3}>
            <Sidebar />
          </Col>
          <Col xs={6}>
            <Feed></Feed>
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
