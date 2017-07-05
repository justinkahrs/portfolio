import React from 'react';
import { Col } from 'react-bootstrap';
import twitterLogo from './img/twitter.png';
import githubLogo from './img/github.png';

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    img: {
      width: '64px',
      height: '64px',
    },
    flexDirection: 'row',
  },
};

const Contact = () => (
  <Col style={styles.center} lg={12}>
    <h3>Email</h3>
    <p>justin@justinkahrs.com</p>
    <h3>Telephone</h3>
    <p>(231) 794-1337</p>
    <h3>Social</h3>
    <div style={styles.logo}>
    <a href="https://twitter.com/justin_kahrs">
      <img style={styles.logo.img} src={twitterLogo} alt="Justin Kahrs Twitter Profile" />
    </a>
    <a href="https://github.com/justinkahrs">
      <img style={styles.logo.img} src={githubLogo} alt="Justin Kahrs Github Profile" />
    </a>
    </div>
  </Col>
);
export default Contact;
