'use strict';

import * as storage from 'modules/storage';

export default function listState(state, action) {
  switch (action.type) {
    case 'LIST_SAVE': {
      state = Object.assign({}, state, {
        [action.data.name]: action.data
      });
      storage.set('list', state);
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

