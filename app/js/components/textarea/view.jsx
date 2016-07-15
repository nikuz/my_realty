'use strict';

import * as React from 'react';
import * as _ from 'underscore';

import './style.less';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    var data = this.state.data;
    data.value = e.target.value;
    this.setState({
      data
    });
    _.isFunction(this.props.onChange) && this.props.onChange(data);
  }
  render() {
    var state = this.state,
      style = '';

    if (this.props.size === 'small') {
      style += ' small';
    }

    return (
      <textarea
        onChange={this.change}
        className={style}
        defaultValue={state.data.value}
      />
    );
  }
}

Textarea.propTypes = {
  data: React.PropTypes.object.isRequired,
  size: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Textarea;
