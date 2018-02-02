import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styled-theming';
import { 
  borderColor,
  ListTitleColor,
  descColor, 
  ListItemBottomColor, 
  navLinkActivedColor 
} from '../config/cssVar.js';

const Title = styled.h3` 
  margin: 0;

  line-height: 1;

	font-size: 22px;
  font-weight: 600;
	color: ${ListTitleColor};
`;

const Section = styled.section`
	font-size: 12px;
	color: ${ListItemBottomColor};
`;

const Desc = styled.p`
  line-height: 2;

  font-size: 14px;
  font-weight: 400;
  color: ${descColor};
`;

const DateItem = styled.span`
  margin-right: 10px;
`;

const Category = styled(Link)`
  padding-right: 10px;

  color: ${ListItemBottomColor};
  text-decoration: none;

  &:hover {
    color: ${navLinkActivedColor}
  }
`;

const Layout = styled.article`
	padding-bottom: 30px;

  border-bottom: 1px solid ${borderColor};
`;

const ListItem = ({ title, desc, date, categories }) => (
	<Layout>
		<Title>{title}</Title>
		<Section>
      <Desc>{desc}</Desc>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-date"></use>
      </svg>
      <DateItem>{date}</DateItem>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-Categoryanalysis"></use>
      </svg>
      {
        categories.map(item => (
          <Category
            to={`/postList?type=${item}`}
            title={item}
            key={item}
          >
            {item}
          </Category>
        ))
      }
    </Section>
	</Layout>
)

export default ListItem;