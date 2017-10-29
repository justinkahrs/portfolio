import React from 'react';
import { Col } from 'react-bootstrap';

const styles = {
  date: {
    display: 'inline',
  },
  item: {
    paddingBottom: '.5em',
  },
  location: {
    marginTop: '0',
    fontSize: '16px',
    marginBottom: '.5em',
  },
};

const PromotionEntry = props => (
  <Col lg={12}>
    <h2>{props.mainTitle}</h2>
    <h3 style={styles.location}>{props.location.toUpperCase()}</h3>
    <div>
      {props.entries.map(entry => (
        <div key={entry.title} style={styles.item}>
          <div>{entry.title}</div>
          <div style={styles.date}>
            ({entry.startDate} - {entry.endDate})
          </div>
        </div>
      ))}
    </div>
    {props.children}
  </Col>
);
export default PromotionEntry;
