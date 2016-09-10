'use strict';

import React, {Component} from 'react';
import styles from './styles.css';

class Header extends Component {
  render() {
    return (
      <header className={ styles.root }><h1>header</h1></header>
    )
  }
}

export default Header
