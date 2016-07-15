'use strict';

import * as _ from 'underscore';
import constants from '../modules/constants';
import * as storage from '../modules/storage';
import {deepClone} from '../modules/object';

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
    },
    apartments: {
      name: constants('apartments'),
      id: 'apartments',
      icon: '/images/apartment_orange.svg'
    },
    house: {
      name: constants('houses'),
      id: 'houses',
      icon: '/images/house_orange.svg'
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
  state[`${key}_custom`] = true;
  var stateForStore = deepClone(state);
  stateForStore.view = deepClone(DEFAULT.view);
  storage.set('filter', stateForStore);
  return state;
}

function clear(state, key) {
  state = Object.assign({}, state);
  state[key] = deepClone(DEFAULT[key]);
  state[`${key}_custom`] = false;
  let stateForStore = deepClone(state);
  stateForStore.view = deepClone(DEFAULT.view);
  storage.set('filter', stateForStore);
  return state;
}

export default function filterState(state, action) {
  switch (action.type) {
    case 'FILTER_SORT_CHANGE':
      return update(state, action, 'sort');
    case 'FILTER_SORT_CLEAR':
      return clear(state, 'sort');
    case 'FILTER_FILTER_CHANGE':
      return update(state, action, 'filter');
    case 'FILTER_FILTER_CLEAR':
      return clear(state, 'filter');
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
        return deepClone(DEFAULT);
      } else {
        return state;
      }
  }
};
