'use strict';

function save(data) {
  return {
    type: 'LIST_SAVE',
    data
  };
}

export {
  save
};
