import React from 'react';
import { Col } from 'react-bootstrap';
import './about.css';
import profilePic from './me.jpg';
import profileText from './profileText';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  profilePic: {
    marginBottom: '2em',
    marginTop: '2em',
    height: '256px',
    width: '256px',
    borderRadius: '50%',
  },
  profileBody: {
    width: '60%',
    justifyContent: 'center',
  },
};
const About = () => (
  <Col lg={12}>
    <Col style={styles.container}>
      <img alt="me in front of a blue background" style={styles.profilePic} src={profilePic} />
    </Col>
    <Col lg={12}>
      <div style={styles.container}>
        {profileText}
      </div>
    </Col>
  </Col>
);
export default About;
