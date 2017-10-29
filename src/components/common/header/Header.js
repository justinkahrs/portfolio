import React from 'react';
import { bounceInLeft, bounceInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';

import './header.css';

const bounceLeftAnimation = keyframes`${bounceInLeft}`;
const bounceRightAnimation = keyframes`${bounceInRight}`;
const BouncyLeft = styled.div`animation: 1s ${bounceLeftAnimation};`;
const BouncyRight = styled.div`animation: 1s ${bounceRightAnimation};`;

const Header = props => (
  <div className="header">
    <BouncyLeft className="header__main">{props.main}</BouncyLeft>
    <BouncyRight className="header__sub">{props.sub}</BouncyRight>
  </div>
);
export default Header;
