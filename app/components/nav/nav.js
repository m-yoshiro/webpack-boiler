'use strict';

import React, {Component} from 'react';
import styles from './styles.css';

class Nav extends Component {
  render() {
    return (
      <nav>
        {this.props.childlen}
      </nav>
    );
  }
}

export default Nav
