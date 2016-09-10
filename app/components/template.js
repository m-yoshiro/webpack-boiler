'use strict';

import styles from './App.css';

import React, {Component} from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';

class Template extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Template
