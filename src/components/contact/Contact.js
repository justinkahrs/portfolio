import React from 'react';
import { Col } from 'react-bootstrap';

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
};

const Contact = () => (
  <Col style={styles.center} lg={12}>
    <h3>Email</h3>
    <p>justin@justinkahrs.com</p>
    <h3>Telephone</h3>
    <p>(231) 794-1337</p>
  </Col>
);
export default Contact;
