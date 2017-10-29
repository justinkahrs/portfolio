import React, { PureComponent } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { bounceInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import Header from './components/common/header/Header';
import Navigation from './components/common/navigation/Navigation';
import Pages from './components/common/navigation/Pages';
import NavItems from './components/common/navigation/NavItems';

import './app.css';

const bounceAnimation = keyframes`${bounceInUp}`;
const BouncyDiv = styled.div`animation: 1s ${bounceAnimation};`;

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
          <BouncyDiv className="all">
            <Navigation handleSelect={this.handleSelect} navItems={NavItems} />
            {selected}
          </BouncyDiv>
        </div>
      </Grid>
    );
  }
}

export default App;
