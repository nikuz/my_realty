'use strict';

import * as _ from 'underscore';
import constants from 'modules/constants';
import * as storage from 'modules/storage';
import {deepClone} from 'modules/object';

const DEFAULT = {};

export default function backupState(state, action) {
  switch (action.type) {
    case 'BACKUP_SET':
      return state;
    default:
      if (state === undefined) {
        return deepClone(DEFAULT);
      } else {
        return state;
      }
  }
};
