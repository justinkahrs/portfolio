import React from 'react';
import { Col, Collapse, Nav, NavItem } from 'react-bootstrap';
import Pages from './Pages';
import './navigation.css';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      selected: Pages['about'],
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
            justified
            onSelect={this.handleSelect}
            className="navBar"
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
