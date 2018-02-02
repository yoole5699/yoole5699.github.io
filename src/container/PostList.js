import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssTransition from 'react-addons-css-transition-group';
import styled from 'styled-components';
import theme from 'styled-theming';
import ListItem from '../components/ListItem';

const PostList = ({ match }) => (
  <Fragment>
  	<ListItem  
      title='BAZINGA' 
      desc='bazinga!bazinga!!bazinga!!!' 
      date='2017-12-04'
      categories={[ 'test' ]}
    />
  </Fragment>
)


export default PostList;