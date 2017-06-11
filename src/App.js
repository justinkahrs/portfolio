import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/common/header/Header';
import Navigation from './components/common/navigation/Navigation';
import './app.css';

class App extends Component {
  render() {
    return (
      <Grid className="mainTitle">
        <Row>
          <Header main="Justin Kahrs" sub="Software Engineer" />
        </Row>
        <Row className="navAndBody">
          <Navigation />
        </Row>
      </Grid>
    );
  }
}

export default App;
