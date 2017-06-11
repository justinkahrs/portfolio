import React from 'react';
import { Col } from 'react-bootstrap';

const styles = {
  date: {
    fontWeight: 'bold',
  },
};

const Entry = props => (
  <Col lg={12}>
    <h2>{props.title}</h2>
    <h3>{props.location}</h3>
    <p style={styles.date}>({props.startDate} - {props.endDate})</p>
    {props.children}
  </Col>
);
export default Entry;