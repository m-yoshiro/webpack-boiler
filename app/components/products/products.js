'use strict';

import React, {Component} from 'react';
import styles from './styles.css';
import ProductsList from './productsList/productsList';

class Products extends Component {
  render() {
    return (
      <ul>
        <li>
          <ProductList></ProductList>
        </li>
      </ul>
    );
  }
}

export default Products
