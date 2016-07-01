'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import Icon from 'react-fa';

import './style.less';

class ManagerView extends React.Component {
  renderItem(item, controller) {
    return _.map(item, (item, key) => {
      var className = 'm_item';
      if (item.active) {
        className += ' mi_active';
      }
      return (
        <li key={key}>
          <a className={className} onClick={controller.bind(null, key)}>
            <Icon name={item.icon} className="mi_icon" />
            {item.name}
          </a>
        </li>
      );
    });
  }
  render() {
    var props = this.props;
    return (
      <div id="manager">
        <ul id="m_sort">
          {this.renderItem(props.manager.sort, props.sortChange)}
        </ul>
        <ul id="m_filter">
          {this.renderItem(props.manager.filter, props.filterChange)}
        </ul>
        <ul id="m_view">
          {this.renderItem(props.manager.view, props.viewChange)}
        </ul>
      </div>
    );
  }
}

export default ManagerView;
