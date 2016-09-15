'use strict';

import clients from '../scripts/script';
import React, {Component} from 'react';
const contents = [
  require('../posts/idea01.pug')(),
  require('../posts/idea02.pug')(),
  require('../posts/idea03.pug')(),
  require('../posts/idea04.pug')(),
  require('../posts/idea05.pug')(),
];

class Post extends Component {
  componentDidMount() {
    clients();
  }
  render() {
    return (
      <div>
        {
          contents.map((data, key) => {
            return (
              <div key={key} dangerouslySetInnerHTML={ {__html: data } } />
            )
          })
        }
      </div>
    );
  }
}



export default Post
