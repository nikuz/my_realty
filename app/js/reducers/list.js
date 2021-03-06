'use strict';

import * as _ from 'underscore';
import * as storage from '../modules/storage';
import {deepClone} from '../modules/object';

export default function listState(state, action) {
  switch (action.type) {
    case 'LIST_POPULATE': {
      state = Object.assign({}, state);
      _.each(action.data, function(value, key) {
        if (action.overwrite === false && state[key]) {
          return;
        }
        state[key] = value;
      });
      let stateForStore = deepClone(state);
      _.each(stateForStore, function(item) {
        item.selected = false;
        item.edited = false;
      });
      storage.set('list', stateForStore);
      return state;
    }
    case 'LIST_SAVE': {
      state = Object.assign({}, state, {
        [action.name]: action.data
      });
      if (action.previousName && action.previousName !== action.name) {
        delete state[action.previousName];
      }
      let stateForStore = deepClone(state);
      _.each(stateForStore, function(item) {
        item.selected = false;
        item.edited = false;
      });
      storage.set('list', stateForStore);
      return state;
    }
    case 'LIST_MARK_AS_SELECTED':
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        item.selected = key === action.selectedId;
      });
      return state;
    case 'LIST_DESELECT_ALL':
      state = Object.assign({}, state);
      _.each(state, function(item) {
        item.selected = false;
      });
      return state;
    case 'LIST_EDIT':
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        item.edited = key === action.editId;
      });
      return state;
    case 'LIST_REMOVE':
      state = Object.assign({}, state);
      delete state[action.removeId];
      storage.set('list', state);
      return state;
    case 'LIST_ADD_TO_FAVORITES': {
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        if (key === action.realtyId) {
          item.in_favorites = true;
        }
      });
      let stateForStore = deepClone(state);
      _.each(stateForStore, function(item) {
        item.selected = false;
        item.edited = false;
      });
      storage.set('list', stateForStore);
      return state;
    }
    case 'LIST_REMOVE_FROM_FAVORITES': {
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        if (key === action.realtyId) {
          item.in_favorites = false;
        }
      });
      let stateForStore = deepClone(state);
      _.each(stateForStore, function(item) {
        item.selected = false;
        item.edited = false;
      });
      storage.set('list', stateForStore);
      return state;
    }
    case 'LIST_ADD_TO_COMPARE': {
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        if (key === action.realtyId) {
          item.in_compare = true;
          item.in_compare_date = Date.now();
        }
      });
      let stateForStore = deepClone(state);
      _.each(stateForStore, function(item) {
        item.selected = false;
        item.edited = false;
      });
      storage.set('list', stateForStore);
      return state;
    }
    case 'LIST_REMOVE_FROM_COMPARE': {
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        if (key === action.realtyId) {
          item.in_compare = false;
          delete item.in_compare_date;
        }
      });
      let stateForStore = deepClone(state);
      _.each(stateForStore, function(item) {
        item.selected = false;
        item.edited = false;
      });
      storage.set('list', stateForStore);
      return state;
    }
    default:
      if (state === undefined) {
        return {};
      } else {
        return state;
      }
  }
};

