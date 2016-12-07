import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createBrowserHistory } from 'history';

import Index from './containers/Index.js';
import ContentList from './containers/ContentList.js';

import './styles/scss/main.scss';
import './styles/scss/index.scss';

const appHistory = useRouterHistory(createBrowserHistory)({ queryKey: false });

var About = (location,cb) => {
  require.ensure([], require => {
    cb(null, require('./components/about.js').default);
  }, 'about');
}

var Comment = (location,cb) => {
  require.ensure([], require => {
    cb(null, require('./components/comment.js').default);
  }, 'comment');
}

const routes = (
  <Route path="/" component={Index}>
    <IndexRoute  component={ContentList} />
    <Route path="comment" getComponent={Comment} />
    <Route path="about" getComponent={About} />
  </Route>
);


export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};