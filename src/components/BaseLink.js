import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  navLinkColor, 
  navLinkActivedColor 
} from '../config/cssVar.js';

const BaseLink = styled(Link)`
  line-height: 2;
  text-decoration: none;
  color: ${navLinkColor};

  &:hover {
    color: ${navLinkActivedColor}
  }
`;

export default BaseLink;