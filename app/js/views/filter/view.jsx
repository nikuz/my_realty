'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';

import './style.less';

class FilterView extends React.Component {
  renderItem(item, controller) {
    return _.map(item, (item, key) => {
      var className = 'f_item';
      if (item.active) {
        className += ' fi_active';
      }
      return (
        <li key={key}>
          <a className={className} onClick={controller.bind(null, key)}>
            <Icon name={item.icon} className="fi_icon" />
            {item.name}
          </a>
        </li>
      );
    });
  }
  render() {
    var props = this.props;
    return (
      <div id="filter">
        <ul id="f_sort">
          {this.renderItem(props.filter.sort, props.sortChange)}
        </ul>
        <ul id="f_filter">
          {this.renderItem(props.filter.filter, props.filterChange)}
        </ul>
        <ul id="f_view">
          {this.renderItem(props.filter.view, props.viewChange)}
        </ul>
      </div>
    );
  }
}

export default FilterView;
