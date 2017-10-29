import React from 'react';
import { Col } from 'react-bootstrap';

import './contact.css';

const Contact = () => (
  <Col className="contactPage" lg={12}>
    <h3>Email</h3>
    <p>justin@justinkahrs.com</p>
    <h3>Telephone</h3>
    <p>(231) 794-1337</p>
    <h3>Social</h3>
    <div className="logos">
      <a href="https://twitter.com/justin_kahrs">
        <div className="logoBtn logoBtn--twitter" />
      </a>
      <a href="https://github.com/justinkahrs">
        <div className="logoBtn logoBtn--github" />
      </a>
    </div>
  </Col>
);
export default Contact;
