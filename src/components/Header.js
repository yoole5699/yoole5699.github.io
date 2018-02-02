import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import styled from 'styled-components';
import { 
  borderColor, 
  navLinkActivedColor 
} from '../config/cssVar.js';
import BaseLink from './BaseLink';

const HeaderLayout = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 70%;
	height: 60px;

	font-size: 12px;

  background-color: #fff;
	border-bottom: 1px solid ${borderColor};
`;

const NavLayout = styled.nav`
  padding: 18px 30px;
`;

const NormalLink = BaseLink.extend`
	padding-right: 20px;
`;

const ActivedLink = NormalLink.extend`
	color: ${navLinkActivedColor};
`;

const LinkArray = [
	{
		to: 'postList',
		name: '首页',
	},
	{
		to: 'picWall',
		name: '图墙',
	},
	{
		to: 'aboutMe',
		name: '关于',
	},
	{
		to: 'friendLink',
		name: '友链',
	}
];

const Header = ({ location: { pathname } }) => (
	<HeaderLayout>
    <NavLayout>
  		{
  			LinkArray.map(item => {
  				const LinkComponent = pathname === `/${item.to}` ? ActivedLink : NormalLink;
  				return (
  					<LinkComponent 
  						to={item.to}
  						key={item.to}
  					>
  						{item.name}
  					</LinkComponent>
  				)
  			})
  		}
    </NavLayout>
	</HeaderLayout>
)

export default withRouter(Header);