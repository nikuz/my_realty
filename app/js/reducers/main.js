'use strict';

import appStateReducer from './state';
import manager from './manager';

function appReducers(state = {}, action) {
  return {
    state: appStateReducer(state.state, action),
    manager: manager(state.manager, action)
  }
}

export default appReducers;
