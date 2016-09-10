'use strict';

import React, {Component} from 'react';
import styles from './styles.css';
import ProductsList from './products-list/products-list';

class Products extends Component {
  render() {
    return (
      <p>テスト記事です</p>
      <ul>
        <li>
          <ProductList></ProductList>
        </li>
      </ul>
    );
  }
}

export default Products
