'use strict';

import * as React from 'react';
import * as _ from 'underscore';

import './style.less';

class ListView extends React.Component {
  renderItem(item, key) {
    return (
      <div key={key}>
        
      </div>
    );
  }
  render() {
    var props = this.props;

    return (
      <div id="list">
        {_.map(props.list, (item, key) => {
          return this.renderItem(item, key);
        })}
        <a href="#" id="list_add_icon" onClick={props.addRealty} />
      </div>
    );
  }
}

export default ListView;
