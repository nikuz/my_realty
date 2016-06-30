'use strict';

import * as React from 'react';

import './style.less';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    var data = this.state.data,
      value = e.target.value;

    switch (this.props.type) {
      case 'number':
        value = parseFloat(value);
        if (isNaN(value)) {
          value = '';
        }
        break;
    }
    data.value = value;
    this.setState({
      data
    });
  }
  render() {
    var style = 'text-input';
    if (this.props.size === 'small') {
      style += ' small';
    }
    
    return (
      <input
        type="text"
        value={this.state.data.value}
        placeholder={this.props.placeholder}
        onChange={this.change}
        className={style}
      />
    );
  }
}

TextInput.propTypes = {
  data: React.PropTypes.object.isRequired,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  size: React.PropTypes.string
};

export default TextInput;
