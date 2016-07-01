'use strict';

import * as _ from 'underscore';
import constants from 'modules/constants';
import * as storage from 'modules/storage';

const DEFAULT = {
  sort: {
    price: {
      name: constants('price'),
      icon: 'usd'
    },
    area: {
      name: constants('area'),
      icon: 'expand'
    }
  },
  filter: {
    favorites: {
      name: constants('favorites'),
      icon: 'star'
    }
  },
  view: {
    list: {
      name: constants('list'),
      icon: 'th-list',
      active: true
    },
    map: {
      name: constants('map'),
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
  storage.set('manager', state);
  return state;
}

export default function managerState(state, action) {
  switch (action.type) {
    case 'MANAGER_SORT_CHANGE':
      return update(state, action, 'sort');
    case 'MANAGER_SORT_CLEAR':
      state = Object.assign({}, state, DEFAULT.sort);
      storage.set('manager', state);
      return state;
    case 'MANAGER_FILTER_CHANGE':
      return update(state, action, 'filter');
    case 'MANAGER_FILTER_CLEAR':
      state = Object.assign({}, state, DEFAULT.filter);
      storage.set('manager', state);
      return state;
    case 'MANAGER_VIEW_CHANGE':
      return update(state, action, 'view');
    default:
      if (state === undefined) {
        return DEFAULT;
      } else {
        return state;
      }
  }
};
