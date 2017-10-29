import React from 'react';
import { Col } from 'react-bootstrap';

import './portfolio.css';

const Portfolio = () => (
  <Col className="portfolioPage" lg={12}>
    <div className="portfolio--center">
      <h2>Here are some things I've made</h2>
      <a className="portfolioBtn" href="https://justinkahrs.github.io/pickapartpc/">
        Pick a Part PC
      </a>
      <br />
      <p>
        This is a proof of concept website I made to simplify the PC building process. The site uses React 16, React
        Router v4, and Redux (to keep track of the shopping cart). I focused on a modern interface with an easy to
        follow form. See the code for Pick a Part PC and the site you're currently reading on my{' '}
        <a href="https://github.com/justinkahrs">github page</a>.
      </p>
    </div>
  </Col>
);

export default Portfolio;
