'use strict';

import appStateReducer from './state';
import filter from './filter';
import list from './list';
import backup from './backup';

function appReducers(state = {}, action) {
  return {
    state: appStateReducer(state.state, action),
    filter: filter(state.filter, action),
    list: list(state.list, action),
    backup: backup(state.backup, action)
  };
}

export default appReducers;
