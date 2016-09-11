'use strict';

import React, {Component} from 'react';
import ProductsList from '../components/productsList/productsList';

class Products extends Component {
  render() {
    const posts = [{
        title: 'css',
        description: 'sssssss',
      },
      {
        title: 'image',
        description: 'ddfdsfsdf'
      }
    ];
    return (
      <ProductsList posts={posts} />
    );
  }
}

export default Products
