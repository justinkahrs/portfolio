import React from 'react';
import { Col } from 'react-bootstrap';

const styles = {
  date: {
    fontWeight: 'bold',
  },
  location: {
    marginTop: '0',
  },
};

const Entry = props => (
  <Col lg={12}>
    <h2>{props.title}</h2>
    <h3 style={styles.location}>{props.location}</h3>
    <p style={styles.date}>({props.startDate} - {props.endDate})</p>
    {props.children}
  </Col>
);
export default Entry;
