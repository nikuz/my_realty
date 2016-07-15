'use strict';

import React from 'react';
import Icon from 'react-fa';

class Loading extends React.Component {
  render() {
    var props = this.props,
      size = props.size,
      color = props.color || '#333';

    if (size === 'big') {
      size = '2x';
    } else {
      size = undefined;
    }

    return (
      <Icon
        name="circle-o-notch"
        spin
        size={size}
        style={{color: color}}
        className={props.className}
      />
    );
  }
}

Loading.propTypes = {
  size: React.PropTypes.string,
  color: React.PropTypes.string
};

export default Loading;
