'use strict';

import * as React from 'react';

import './style.less';

class ListView extends React.Component {
  render() {
    var props = this.props;

    return (
      <div id="list">
        List
        <a href="#" id="list_add_icon" onClick={props.addRealty} />
      </div>
    );
  }
}

export default ListView;
