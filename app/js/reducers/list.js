'use strict';

import * as _ from 'underscore';
import * as storage from 'modules/storage';

export default function listState(state, action) {
  switch (action.type) {
    case 'LIST_SAVE': {
      state = Object.assign({}, state, {
        [action.name]: action.data
      });
      storage.set('list', state);
      return state;
    }
    case 'MARK_AS_SELECTED': {
      state = Object.assign({}, state);
      _.each(state, function(item, key) {
        item.selected = key === action.selectedId;
      });
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

