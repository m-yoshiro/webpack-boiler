'use strict';

import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Template from './components/template';
import Home from './layouts/home';
import About from './layouts/about';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    );
  }
}

export default Routes
