'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import * as constants from '../../modules/constants';

import './style.less';

class SegmentedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
    this.change = this.change.bind(this);
  }
  change(e) {
    var itemKey = e.target.getAttribute('data-item'),
      items = this.state.items,
      selectedItem;

    _.each(items, function(item, key) {
      if (key === itemKey) {
        selectedItem = item;
        item.selected = true;
      } else {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
    _.isFunction(this.props.onSelect) && this.props.onSelect(selectedItem);
  }
  render() {
    var items = this.state.items;
    return (
      <ul className="segmented-control">
        {_.map(items, (item, key) => {
          return (
            <li
              key={key}
              className={item.selected ? 'selected' : null}
              data-item={key}
              onClick={this.change}
            >
              {constants.get(item.name)}
            </li>
          );
        })}
      </ul>
    );
  }
}

SegmentedControl.propTypes = {
  items: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func
};

export default SegmentedControl;
