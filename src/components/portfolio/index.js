import React from 'react';
import { Col } from 'react-bootstrap';

const styles = {
  center: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    fontSize: '20px',
  },
};
const Portfolio = () => (
  <Col style={styles.center} lg={12}>
    <h2>Here are some things I've made</h2>
    <a style={styles.link} href="https://justinkahrs.github.io/pickapartpc/">
      Pick a Part PC
    </a>
    <br />
    <p style={{ textAlign: 'justify' }}>
      This is a proof of concept website I made to simplify the PC building process. The site uses React 16, React Router
      v4, and Redux (to keep track of the shopping cart). I focused on a modern interface with
      an easy to follow form. See the code for Pick a Part PC and the site you're currently reading on my <a href="https://github.com/justinkahrs">github page</a>.
    </p>
  </Col>
);

export default Portfolio;
