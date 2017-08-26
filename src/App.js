import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from './components/common/header/Header';
import Navigation from './components/common/navigation/Navigation';
import Pages from './components/common/navigation/Pages';
import NavItems from './components/common/navigation/NavItems';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: Pages.about,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selection) {
    this.setState({
      selected: Pages[selection],
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <Grid className="everything">
        <Row>
          <Header main="Justin Kahrs" sub="Software Engineer" />
        </Row>
        <Row className="navAndBody">
          <Navigation
            selected={selected}
            handleSelect={this.handleSelect}
            navItems={NavItems}
          />
        </Row>
      </Grid>
    );
  }
}

export default App;
