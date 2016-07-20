'use strict';

const DEFAULT = {
  name: 'initial'
};

export default function appState(state, action) {
  switch (action.type) {
    case 'APP_STATE_CHANGE':
      return Object.assign({}, state, {
        name: action.state,
        variables: action.variables
      });
    default:
      if (state === undefined) {
        return DEFAULT;
      } else {
        return state;
      }
  }
};
