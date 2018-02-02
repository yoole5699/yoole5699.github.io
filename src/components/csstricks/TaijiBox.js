import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const Square = styled.div`
  height: 400px;
  width: 400px;
  box-shadow: rgba(0, 0, 0, .3) 0 0 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Taiji = styled.div`
  position: relative;

  height: 100px;
  width: 0;

  border-radius: 50%;
  border-left: 50px solid white;
  border-right: 50px solid black;
  box-shadow: 0 0 10px;

  &::before {
    position: absolute; 
    left: -25px;
    top: 0;

    height: 50px;
    width: 50px;

    background-color: white;
    border-radius: 50%;
    box-shadow: 0 50px black;
    content: ' ';
  }

  &::after {
    position: absolute;
    left: -12.5px;
    top: 12.5px;

    height: 25px;
    width: 25px;

    background-color: black;
    border-radius: 50%;
    box-shadow: 0 50px white;
    content: ' ';
  }
`;

const TaijiLinear = Taiji.extend`
  animation: ${rotate} 2s linear infinite;
`;

const TaijiEase = Taiji.extend`
  animation: ${rotate} 2s ease infinite;
`;

const TaijiEaseIn = Taiji.extend`
  animation: ${rotate} 2s ease-in infinite;
`;

const TaijiEaseOut = Taiji.extend`
  animation: ${rotate} 2s ease-out infinite;
`;

const TaijiBox = () => (
  <Square>
    <TaijiLinear />
    <TaijiEase />
    <TaijiEaseIn />
    <TaijiEaseOut />
  </Square>
);

export default TaijiBox;