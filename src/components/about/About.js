import React from 'react';
import { Col } from 'react-bootstrap';
import './about.css';

const styles = {
  profile: {
    marginBottom: '2em',
  },
};
const About = () => (
  <Col lg={12}>
    <Col smOffset={3} lgOffset={3}>
      <div style={styles.profile} className="profilePic" />
    </Col>
    <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
      velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.
      Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
      facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.
      Proin quam. Etiam ultrices. </p>
  </Col>
);
export default About;
