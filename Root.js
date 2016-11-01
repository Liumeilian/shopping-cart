import React, { Component } from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import Index from './containers/Index.js';
import ContentList from './containers/ContentList.js';

import './styles/scss/main.scss';
import './styles/scss/index.scss';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

var Detail = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/ProductDetail.js').default);
  }, 'detail');
};

const routes = (
  <Route path="/" component={Index}>
    <IndexRoute component={ContentList} />
    <Route path="detail/:name" getComponent={Detail} />
  </Route>
);


export default class Root extends Component {
  render() {
    return <Router history={appHistory} routes={routes} />
  }
};