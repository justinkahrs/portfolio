import React from 'react';
import { Col, Image } from 'react-bootstrap';

import profilePic from './me.jpg';
import profileText from './profileText';

import './about.css';

const About = () => (
  <Col lg={12}>
    <Col className="profilePic" xs={12} sm={3} md={4} lg={4}>
      <Image alt="me in front of a blue background" src={profilePic} responsive rounded />
    </Col>
    <Col md={4} lg={8} />
    {profileText}
  </Col>
);
export default About;
