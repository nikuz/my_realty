'use strict';

import * as _ from 'underscore';

const DEFAULT = {
  sort: {
    price: {
      name: chrome.i18n.getMessage('price'),
      icon: 'usd'
    },
    area: {
      name: chrome.i18n.getMessage('area'),
      icon: 'expand'
    }
  },
  filter: {
    favorites: {
      name: chrome.i18n.getMessage('favorites'),
      icon: 'star'
    }
  },
  view: {
    list: {
      name: chrome.i18n.getMessage('list'),
      icon: 'th-list',
      active: true
    },
    map: {
      name: chrome.i18n.getMessage('map'),
      icon: 'map'
    }
  }
};

function update(state, action, key) {
  state = Object.assign({}, state);
  _.each(state[key], function(item, key) {
    if (key === action.name) {
      item.active = true;
      item.desc = !item.desc;
    } else {
      item.active = false;
      item.desc = false;
    }
  });
  return state;
}

export default function managerState(state, action) {
  switch (action.type) {
    case 'MANAGER_SORT_CHANGE':
      return update(state, action, 'sort');
    case 'MANAGER_SORT_CLEAR':
      return Object.assign({}, state, DEFAULT.sort);
    case 'MANAGER_FILTER_CHANGE':
      return update(state, action, 'filter');
    case 'MANAGER_FILTER_CLEAR':
      return Object.assign({}, state, DEFAULT.filter);
    case 'MANAGER_VIEW_CHANGE':
      return update(state, action, 'view');
    default:
      return DEFAULT;
  }
};
