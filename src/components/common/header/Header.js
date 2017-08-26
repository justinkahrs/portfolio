import React from 'react';
import './header.css';

const Header = props => (
  <div className="header">
    <div className="header__main fade-in one">{props.main}</div>
    <div className="header__sub fade-in two">{props.sub}</div>
  </div>
);
export default Header;
