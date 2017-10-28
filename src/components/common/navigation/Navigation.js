import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import './navigation.css';

const Navigation = ({ handleSelect, navItems }) => (
  <Col lg={12}>
    <Nav justified onSelect={handleSelect} className="navBar">
      {navItems.map(item => item)}
    </Nav>
  </Col>
);
export default Navigation;
