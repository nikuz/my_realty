'use strict';

import * as React from 'react';
import * as _ from 'underscore';

import './style.less';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    var items = this.props.items;
    this.state = {
      items: items,
      defaultValue: this.getDefaultValue(items)
    };
    this.change = this.change.bind(this);
  }
  getDefaultValue(items) {
    var value;
    _.each(items, function(item, key) {
      if (item.selected) {
        value = key;
      }
    });
    return value;
  }
  change(e) {
    var value = e.target.value,
      items = this.state.items,
      selectedItem;

    _.each(items, function(item, key) {
      if (key === value) {
        selectedItem = item;
        item.selected = true;
      } else {
        item.selected = false;
      }
    });

    this.setState({
      items,
      defaultValue: value
    });
    _.isFunction(this.props.onSelect) && this.props.onSelect(selectedItem);
  }
  render() {
    var state = this.state,
      style = '';

    if (this.props.size === 'small') {
      style += ' small';
    }

    return (
      <select onChange={this.change} defaultValue={state.defaultValue} className={style}>
        {_.map(state.items, (item, key) => {
          return (
            <option key={key} value={key}>{item.name}</option>
          );
        })}
      </select>
    );
  }
}

Selector.propTypes = {
  items: React.PropTypes.object.isRequired,
  size: React.PropTypes.string,
  onSelect: React.PropTypes.func
};

export default Selector;
