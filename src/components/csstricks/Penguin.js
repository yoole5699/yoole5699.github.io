import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Square = Center.extend`
  height: 400px;
  width: 400px;

  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
`;

const Head = Center.extend`
  width: 100px;
  height: 80px;

  background-color: black;
  border-radius: 50px / 50px 50px 10px 10px;

  &:before {
    content: '';
    position: absolute;
    margin-top: 20px;

    display: block;
    width: 60px;
    height: 16px;

    background-color: orange;
    border-radius: 30px / 6px 6px 10px 10px;
  }
`;

const Eye = styled.div`
  margin-top: -15px;

  width: 20px;
  height: 30px;

  background-color: white;
  border-radius: 50%;

  &:before {
    content: '';

    display: block;
    margin-top: 10px;

    border-radius: 50%;
  }
`;

const LeftEye = Eye.extend`
  margin-right: 5px;
  
  &:before {
    margin-left: 8px;

    width: 10px;
    height: 13px;

    background-color: black;
  }
`;

const RightEye = Eye.extend`
  &:before {
    margin-left: 2.5px;

    width: 15px;
    height: 10px;

    border-top: 3px solid black;
  }
`;

const Scarf = styled.div`
  margin-top: -12px;

  width: 108px;
  height: 10px;

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid red;
  border-radius: 0 0 60px 60px / 0 0 30px 30px;

  z-index: 2;
  &:after {
    content: '';
    margin-left: 30px;
    margin-top: 15px;

    display: block;

    width: 20px;
    height: 30px;
    background-color: red;
  }
`;

const Body = styled.div`
  margin-top: -10px;

  height: 70px;
  width: 70px;

  border-left: 15px solid black;
  border-right: 15px solid black;
  border-bottom: 10px solid black;
  border-radius: 0 0 50px 50px/ 0 0 50px 50px; 

  background-color: white;
  z-index: 1;

  &:before {
    content: '';

    display: inline-block;
    width: 50px;
    height: 18px;
    
    background-color: black;
    border-radius: 25px / 6px 6px 12px 12px;

    transform: translateX(-45px) rotate(300deg);
  }

  &:after {
    content: '';

    display: inline-block;
    width: 50px;
    height: 18px;
    
    background-color: black;
    border-radius: 25px / 6px 6px 12px 12px;

    transform: translate(68px, -18px) rotate(60deg) ;
  }
`;

const Foot = styled.div`
  width: 100px;
  height: 22px;

  background-color: orange;
  border-radius: 50px 50px 0 0 / 20px 20px 0 0;

  transform: translateY(-20px);
`;

const Penguin = () => (
  <Square>
    <Head>
      <LeftEye />
      <RightEye />
    </Head>
    <Scarf />
    <Body />
    <Foot />
  </Square>
)

export default Penguin;