import React from 'react';
import PostList from '../container/PostList';
import PicWall from '../container/PicWall';
import AboutMe from '../container/AboutMe';

const routes = [
  { 
    exact: true,
    path: '/postList',
    component: PostList,
  },
  { 
    exact: true,
    path: '/picWall',
    component: PicWall,
  },
  { 
    exact: true,
    path: '/aboutMe',
    component: AboutMe,
  },
  // { 
  //   path: '/:no',
  //   component: NotFound,
  // },
];

export default routes;