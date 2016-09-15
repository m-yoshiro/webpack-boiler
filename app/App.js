'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Template from './components/template';
import Post from './layouts/post';

class App extends Component {
  render() {
    return (
      <Template>
        <Post />
      </Template>
    )
  }
}

export default App
