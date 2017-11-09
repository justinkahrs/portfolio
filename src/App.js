import React, { PureComponent } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Header from './components/common/header/Header';
import Navigation from './components/common/navigation/Navigation';
import Pages from './components/common/navigation/Pages';
import NavItems from './components/common/navigation/NavItems';

import './app.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: Pages.about,
    };
  }

  handleSelect = (selection) => {
    this.setState({
      selected: Pages[selection],
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <Grid>
        <Row>
          <Header main="Justin Kahrs" sub="Software Engineer" />
        </Row>
        <div className="navAndBody">
          <Navigation handleSelect={this.handleSelect} navItems={NavItems} />
          {selected}
        </div>
      </Grid>
    );
  }
}

export default App;
