'use strict';

import React, {Component} from 'react';
import styles from './styles.css';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    }
  }
  render() {
    return (
      <div>
        <h1>Products</h1>
        <div className={styles.products__list} >
          {
            this.props.posts.map((post) => {
              return this._productsItem(post);
            }, this)
          }
        </div>
      </div>
    );
  }
  _productsItem(post) {
    return (
      <article className={styles.products__item}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <figure></figure>
      </article>
    );
  }
}

ProductsList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default ProductsList
