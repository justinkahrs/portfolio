import React from 'react';
import Work from '../../work/Work';
import Contact from '../../contact/Contact';
import About from '../../about/About';
import { Col, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './navigation.css';

const styles = {
  nav: {
    paddingBottom: '2em',
  }
}
const handleSelect = selected => (
  console.log(`Selected: ${selected}`)
);

const Navigation = () => (
  <Router>
    <div className="fade-in third">
      <Col lg={12}>
        <Nav style={styles.nav} justified bsStyle="tabs" onSelect={handleSelect}>
          <LinkContainer to="/about"><NavItem eventKey={'about'}>About</NavItem></LinkContainer>
          <LinkContainer to="/work"><NavItem eventKey={'work'}>Work</NavItem></LinkContainer>
          <LinkContainer to="/contact"><NavItem eventKey={'contact'}>Contact</NavItem></LinkContainer>
        </Nav>
      </Col>
      <Col lg={12}>
        <div>
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </Col>
    </div>
  </Router>
);
export default Navigation;
