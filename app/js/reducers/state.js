'use strict';

const DEFAULT_STATE = {
  name: 'initial'
};

export default function appState(state, action) {
  switch (action.type) {
    case 'APP_STATE_CHANGE':
      return Object.assign({}, state, {
        name: action.state
      });
    default:
      return DEFAULT_STATE;
  }
};
