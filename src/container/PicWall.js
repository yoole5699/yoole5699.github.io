import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import theme from 'styled-theming';

import Image from '../components/Image';
import fireWorks1 from '../resource/image/Fireworks-1.jpg';
import fireWorks2 from '../resource/image/Fireworks-2.jpg';
import fireWorks3 from '../resource/image/Fireworks-3.jpg';

const Layout = styled.div`
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
`;

const PicWall = ({ match }) => (
  <Layout>
    {[
      <Image src={fireWorks1} alt="烟花-1" key="烟花-1" />,
      <Image src={fireWorks2} alt="烟花-2" key="烟花-2" />,
      <Image src={fireWorks3} alt="烟花-3" key="烟花-3" />,
    ]}
  </Layout>
)

export default PicWall;