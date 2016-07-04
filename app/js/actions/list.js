'use strict';

function save(name, data) {
  return {
    type: 'LIST_SAVE',
    name,
    data
  };
}

export {
  save
};
