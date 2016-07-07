'use strict';

import appStateReducer from './state';
import filter from './filter';
import list from './list';

function appReducers(state = {}, action) {
  return {
    state: appStateReducer(state.state, action),
    filter: filter(state.filter, action),
    list: list(state.list, action)
  };
}

export default appReducers;
