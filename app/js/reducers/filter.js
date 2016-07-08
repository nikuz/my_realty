'use strict';

import * as _ from 'underscore';
import constants from 'modules/constants';
import * as storage from 'modules/storage';

const DEFAULT = {
  sort: {
    price: {
      name: constants('price'),
      id: 'price',
      icon: 'usd'
    },
    area: {
      name: constants('area'),
      id: 'area',
      icon: 'expand'
    }
  },
  filter: {
    favorites: {
      name: constants('favorites'),
      id: 'favorites',
      icon: 'star'
    }
  },
  view: {
    list: {
      name: constants('list'),
      id: 'list',
      icon: 'th-list',
      active: true
    },
    map: {
      name: constants('map'),
      id: 'map',
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
  var stateForStore = JSON.parse(JSON.stringify(state));
  stateForStore.view = Object.assign({}, DEFAULT.view);
  storage.set('filter', stateForStore);
  return state;
}

export default function filterState(state, action) {
  switch (action.type) {
    case 'FILTER_SORT_CHANGE':
      return update(state, action, 'sort');
    case 'FILTER_SORT_CLEAR':
      state = Object.assign({}, state, DEFAULT.sort);
      storage.set('filter', state);
      return state;
    case 'FILTER_FILTER_CHANGE':
      return update(state, action, 'filter');
    case 'FILTER_FILTER_CLEAR':
      state = Object.assign({}, state, DEFAULT.filter);
      storage.set('filter', state);
      return state;
    case 'FILTER_VIEW_CHANGE':
      state = Object.assign({}, state);
      _.each(state['view'], function(item, key) {
        if (key === action.name) {
          item.active = true;
          item.desc = !item.desc;
        } else {
          item.active = false;
          item.desc = false;
        }
      });
      return state;
    default:
      if (state === undefined) {
        return JSON.parse(JSON.stringify(DEFAULT));
      } else {
        return state;
      }
  }
};
