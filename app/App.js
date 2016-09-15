'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Routes from './routes';

import Template from './components/template';
import Home from './layouts/home';
import About from './layouts/about';
import Products from './layouts/Products';
import Post from './layouts/post';

class App extends Component {
  render() {
    return ((
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products} />
          <Route path="/post" component={Post} />
        </Route>
      </Router>
    ));
  }
}

export default App
