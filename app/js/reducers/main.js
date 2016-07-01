'use strict';

import appStateReducer from './state';
import manager from './manager';
import list from './list';

function appReducers(state = {}, action) {
  return {
    state: appStateReducer(state.state, action),
    manager: manager(state.manager, action),
    list: list(state.list, action)
  };
}

export default appReducers;
