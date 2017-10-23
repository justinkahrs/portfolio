import React from 'react';
import { Col } from 'react-bootstrap';
import './promotionEntry.css';

const styles = {
  date: {
    fontWeight: 'bold',
    display: 'inline',
  },
  item: {
    paddingBottom: '.5em',
  },
  location: {
    marginTop: '0',
  },
  promotions: {
    paddingBottom: '1em',
  },
};

const PromotionEntry = props => (
  <Col lg={12}>
    <h2>{props.mainTitle}</h2>
    <h3 style={styles.location}>{props.location}</h3>
    <div style={styles.promotions}>
      {props.entries.map(entry => (
        <div style={styles.item} key={entry.title}>
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
