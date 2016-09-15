'use strict';

import styles from './App.css';

import React, {Component} from 'react';
import Header from './header/header';
import Nav from './nav/nav';
import Footer from './footer/footer';
import Main from './main/main';


class Template extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Main {...this.props}>
          {this.props.children}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default Template
