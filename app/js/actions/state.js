'use strict';

function change(state, variables) {
  return {
    type: 'APP_STATE_CHANGE',
    state,
    variables
  };
}

export {
  change
};
