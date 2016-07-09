'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';

import './style.less';

class FilterView extends React.Component {
  renderItem(item, controller) {
    return _.map(item, (item, key) => {
      var className = 'f_item',
        icon;

      if (item.active) {
        className += ' fi_active';
      }
      if (item.icon.indexOf('.svg') !== -1) {
        icon = <img src={item.icon} className="fi_custom_icon" />;
      } else {
        icon = <Icon name={item.icon} className="fi_icon" />;
      }

      return (
        <li key={key}>
          <a className={className} onClick={controller.bind(null, key)}>
            {icon}
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
          <li>
            <span
              className={'fi_clear' + (props.filter.sort_custom ? '' : ' hidden')}
              onClick={props.sortClear}
            >
              <Icon name="times-circle" className="fi_icon_clear" />
              Clear
            </span>
          </li>
        </ul>
        <ul id="f_filter">
          {this.renderItem(props.filter.filter, props.filterChange)}
          <li>
            <span
              className={'fi_clear' + (props.filter.filter_custom ? '' : ' hidden')}
              onClick={props.filterClear}
            >
              <Icon name="times-circle" className="fi_icon_clear" />
              Clear
            </span>
          </li>
        </ul>
        <ul id="f_view">
          {this.renderItem(props.filter.view, props.viewChange)}
        </ul>
      </div>
    );
  }
}

export default FilterView;
