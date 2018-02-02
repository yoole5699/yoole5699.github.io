import React, { Fragment } from 'react';
import {
  HashRouter,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import CssTransition from 'react-addons-css-transition-group';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
import PostList from './container/PostList';
import PicWall from './container/PicWall';
import AboutMe from './container/AboutMe';
import NotFound from './container/NotFound';
import routerConfig from './config/router';

const App = () =>  (
  <Fragment>
    <Nav />
    <Main>
      <Header />
      <Route
      	exact
      	path="/"
      	render={() => (
      		<Redirect to="/postList" />
      	)}
      />
      <Route
        exact
        path="/:type"
        render={({ location, match: { params } }) => {
          let MatchedComponent;
          switch (params.type) {
            case 'postList': MatchedComponent = PostList; break;
            case 'picWall': MatchedComponent = PicWall; break;
            case 'aboutMe': MatchedComponent = AboutMe; break;
            default: MatchedComponent = NotFound; break;
          }

          return (
            <CssTransition
              component="div"
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <MatchedComponent 
                location={location} 
                key={location.pathname} 
              />
            </CssTransition>
          )
        }}
      />
    </Main>
  </Fragment>
);

export default App;