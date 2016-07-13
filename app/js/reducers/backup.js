'use strict';

import * as _ from 'underscore';
import * as storage from 'modules/storage';
import {deepClone} from 'modules/object';

const DEFAULT = {};

export default function backupState(state, action) {
  switch (action.type) {
    case 'BACKUP_CREATE':
      state = Object.assign({}, state);
      delete state.error;
      _.extend(state, action.data);
      storage.set('backup', state);
      return state;
    case 'BACKUP_ERROR':
      state = Object.assign({}, state);
      state.error = action.error;
      return state;
    default:
      if (state === undefined) {
        return deepClone(DEFAULT);
      } else {
        return state;
      }
  }
};
