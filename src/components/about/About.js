import React from 'react';
import { Col } from 'react-bootstrap';
import './about.css';
import profilePic from './me.jpg';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  profile: {
    marginBottom: '2em',
    height: '256px',
    width: '256px',
    borderRadius: '50%',
  },
};
const About = () => (
  <Col lg={12}>
    <Col style={styles.container}>
      <img alt="me in front of a blue background" style={styles.profile} src={profilePic} />
    </Col>
    <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
      velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.
      Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
      facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.
      Proin quam. Etiam ultrices. </p>
  </Col>
);
export default About;
