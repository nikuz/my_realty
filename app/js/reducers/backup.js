'use strict';

import * as _ from 'underscore';
import * as storage from 'modules/storage';
import {deepClone} from 'modules/object';

const DEFAULT = {
  do_not_overwrite: true
};

function reset(state) {
  delete state.error;
  delete state.download_error;
  delete state.success_download;
  return state;
}

export default function backupState(state, action) {
  switch (action.type) {
    case 'BACKUP_CREATE':
      state = Object.assign({}, state);
      _.extend(state, action.data);
      storage.set('backup', reset(Object.assign({}, state)));
      return state;
    case 'BACKUP_ERROR':
      state = Object.assign({}, state);
      state.error = action.error;
      return state;
    case 'BACKUP_DO_NOT_OVERWRITE_CHANGE': {
      state = Object.assign({}, state);
      state.do_not_overwrite = action.value;
      storage.set('backup', reset(Object.assign({}, state)));
      return state;
    }
    case 'BACKUP_DOWNLOAD_ERROR':
      state = Object.assign({}, state);
      state.download_error = action.error;
      return state;
    case 'BACKUP_RESET':
      state = reset(Object.assign({}, state));
      return state;
    default:
      if (state === undefined) {
        return deepClone(DEFAULT);
      } else {
        return state;
      }
  }
};
