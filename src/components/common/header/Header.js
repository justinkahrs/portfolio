import React from 'react';
import './header.css';

const Header = props => (
  <div className="header">
    <div className="header__main">{props.main}</div>
    <div className="header__sub">{props.sub}</div>
  </div>
);
export default Header;
