import React from 'react';
import { Col, Nav, NavItem } from 'react-bootstrap';
import './navigation.css';

const Navigation = ({ handleSelect, navItems }) => (
  <Col lg={12}>
    <Nav justified onSelect={handleSelect} className="navBar">
      <NavItem eventKey={'about'}>About</NavItem>
      <NavItem eventKey={'work'}>Work</NavItem>
      <NavItem eventKey={'portfolio'}>Portfolio</NavItem>
      <NavItem eventKey={'contact'}>Contact</NavItem>
    </Nav>
  </Col>
);
export default Navigation;
