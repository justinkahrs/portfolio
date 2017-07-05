import React from 'react';
import { Col } from 'react-bootstrap';

const styles = {
  date: {
    fontWeight: 'bold',
    display: 'inline',
  },
  promotions: {
    paddingBottom: '1em',
  },
  location: {
    marginTop: '0',
  },
};

const PromotionEntry = props => (
  <Col lg={12}>
    <h2>{props.mainTitle}</h2>
    <h3 style={styles.location}>{props.location}</h3>
    <div style={styles.promotions}>{props.entries.map(entry => (<div key={entry.title}>
      <div>{entry.title}</div>
      <div style={styles.date}>({entry.startDate} - {entry.endDate})</div>
    </div>))}
    </div>
    {props.children}
  </Col>
);
export default PromotionEntry;
