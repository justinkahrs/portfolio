import React from 'react';
import { Col, Image } from 'react-bootstrap';

import profilePic from './me.jpg';
import profileText from './profileText';

import './about.css';

const About = () => (
  <Col lg={12}>
    <Col className="profilePic" lg={4}>
      <Image alt="me in front of a blue background" src={profilePic} responsive />
    </Col>
    <Col lg={8} />
    {profileText}
  </Col>
);
export default About;
