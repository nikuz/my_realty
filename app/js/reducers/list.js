'use strict';

import * as _ from 'underscore';
import * as storage from 'modules/storage';

export default function listState(state, action) {
  switch (action.type) {
    case 'LIST_SAVE': {
      state = Object.assign({}, state, {
        [action.name]: action.data
      });
      let stateForStore = JSON.parse(JSON.stringify(state));
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
    default:
      if (state === undefined) {
        return {};
      } else {
        return state;
      }
  }
};

