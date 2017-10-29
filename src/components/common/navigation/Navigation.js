import React from 'react';
import { Col, Nav, NavItem } from 'react-bootstrap';
import './navigation.css';

const Navigation = ({ handleSelect, navItems }) => (
  <Col lg={12}>
    <Nav className="navBar" justified onSelect={handleSelect}>
      <NavItem autofocus eventKey={'about'}>
        about
      </NavItem>
      <NavItem eventKey={'work'}>work</NavItem>
      <NavItem eventKey={'portfolio'}>portfolio</NavItem>
      <NavItem eventKey={'contact'}>contact</NavItem>
    </Nav>
  </Col>
);
export default Navigation;
