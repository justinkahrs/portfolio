import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import './navigation.css';


const Navigation = (props) => {
  const { selected, handleSelect, navItems } = props;
  return (
    <div className="fade-in third">
      <Col lg={12}>
        <Nav
          justified
          onSelect={handleSelect}
          className="navBar"
        >
          {navItems.map(item => item)}
        </Nav>
      </Col>
      <Col lg={12}>
        <div>
          {selected}
        </div>
      </Col>
    </div>
  );
};
export default Navigation;
