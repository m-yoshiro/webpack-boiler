'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Template from './components/template';
import Products from './layouts/products';

class App extends Component {
  render() {
    return (
      <Template>
        <Products />
      </Template>
    );
  }
}

export default App
