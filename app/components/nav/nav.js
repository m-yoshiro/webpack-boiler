'use strict';

import React, {Component} from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

class Nav extends Component {
  propTypes: {
    links: React.PropTypes.array
  }
  render() {
    return (
      <nav>
        <ul role="nav">{
          this.props.links.map((link) =>
            <li><Link to={link.path} >{link.name}</Link></li>
          )
        }</ul>
      </nav>
    );
  }
}

export default Nav
