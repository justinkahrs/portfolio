import React from 'react';
import Work from '../../work/Work';
import Contact from '../../contact/Contact';
import About from '../../about/About';
import { Col, Collapse, Nav, NavItem } from 'react-bootstrap';
import './navigation.css';

const styles = {
  nav: {
    paddingBottom: '2em',
  },
};

const Pages = {
  about: <About key="about" />,
  contact: <Contact key="contact" />,
  work: <Work key="work" />,
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: <div />,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selection) {
    const { selected, open } = this.state;
    if (selected !== Pages[selection]) {
      this.setState({
        open: true,
        selected: Pages[selection],
      });
    } else {
      this.setState({
        open: !open,
        selected: Pages[selection],
      });
    }
  }

  render() {
    return (
      <div className="fade-in third">
        <Col lg={12}>
          <Nav
            style={styles.nav}
            justified
            bsStyle="tabs"
            onSelect={this.handleSelect}
          >
            <NavItem eventKey={'about'}>About</NavItem>
            <NavItem eventKey={'work'}>Work</NavItem>
            <NavItem eventKey={'contact'}>Contact</NavItem>
          </Nav>
        </Col>
        <Col lg={12}>
          <Collapse in={this.state.open}>
            <div>
              {this.state.selected}
            </div>
          </Collapse>
        </Col>
      </div>
    );
  }
}
export default Navigation;
