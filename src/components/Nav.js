import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import { borderColor } from '../config/cssVar.js';
import BaseLink from './BaseLink';
import Batman from './csstricks/Batman';
import Logo from '../resource/image/LogoAi.png';

const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

	width: 30%;
	height: 100%;
	
	border-right: 1px solid ${borderColor};
  z-index: 1;
`;
	// background-image: linear-gradient(180deg, #4872AC, #AAEBF3);

const Nav = () => (
  <Container>
    <Batman />
    <img 
      src={Logo} 
      alt="yoole5699" 
      width={200}
    />
    <BaseLink
      to="" 
      onClick={(e) => { 
        e.preventDefault(); 
        window.location.href = 'https://github.com/yoole5699'; 
      }
    }>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-icongithub"></use>
      </svg>
    </BaseLink>
  </Container>
)

export default Nav;