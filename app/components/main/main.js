'use strict';

import React, {Component} from 'react';
import styles from './styles.css';

class Main extends Component {
  render() {
    return (
      <main className={ styles.root }>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </main>
    );
  }
}

export default Main
