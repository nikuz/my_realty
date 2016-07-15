'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';

import './style.less';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    var data = this.state.data;
    data.selected = e.target.checked;
    this.setState({
      data
    });
    _.isFunction(this.props.onChange) && this.props.onChange(data);
  }
  getIcon(icon) {
    if (/png|svg|gif/.test(icon)) {
      return <img src={icon} className="checkbox_icon" />;
    } else {
      return <Icon name={icon} className="checkbox_icon" />;
    }
  }
  render() {
    var props = this.props;
    return (
      <span>
        <input
          id={props.name}
          type="checkbox"
          checked={props.checked}
          onChange={this.change}
          className="checkbox"
        />
        <label htmlFor={props.name} className="checkbox_label">
          {props.icon ? this.getIcon(props.icon) : null}
          {props.label}
        </label>
      </span>
    );
  }
}

CheckBox.propTypes = {
  data: React.PropTypes.object.isRequired,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default CheckBox;
