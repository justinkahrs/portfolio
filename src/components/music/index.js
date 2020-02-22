import React from 'react';
import { Col } from 'react-bootstrap';

import './music.css';

const Music = () => (
  <Col className="portfolioPage" lg={12}>
    <div className="portfolio--center">
      <h2>In my free time, I like to make music</h2>
      <br />
      <p>
        <iframe title="soundcloud" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/6694646&color=%23403c42&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
      </p>
    </div>
  </Col>
);

export default Music;
