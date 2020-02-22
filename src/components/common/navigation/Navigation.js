import React from 'react';
import { Col, Nav, NavItem } from 'react-bootstrap';
import './navigation.css';

const Navigation = ({ handleSelect }) => (
  <Col lg={12}>
    <Nav className="navBar" justified onSelect={handleSelect}>
      <NavItem id="aboutNav" eventKey={'about'}>
        about
      </NavItem>
      <NavItem eventKey={'work'}>work</NavItem>
      <NavItem eventKey={'portfolio'}>portfolio</NavItem>
      <NavItem eventKey={'music'}>music</NavItem>
      <NavItem eventKey={'contact'}>contact</NavItem>
    </Nav>
    {
      // TO-DO I'm too lazy to put in react-router, will fix when I host this elsewhere
      (window.onload = function () {
        document.getElementById('aboutNav').focus();
      })
    }
  </Col>
);
export default Navigation;
