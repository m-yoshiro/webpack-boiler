'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Template from './components/template';
import Home from './layouts/home';
import About from './layouts/about';
import Products from './layouts/Products';
import Post from './layouts/post';

module.exports = (
  <Route path="/" component={Template}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/products" component={Products} />
    <Route path="/post" component={Post} />
  </Route>
);
