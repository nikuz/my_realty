'use strict';

function save(name, data) {
  return {
    type: 'LIST_SAVE',
    name,
    data
  };
}

function markAsSelected(selectedId) {
  return {
    type: 'MARK_AS_SELECTED',
    selectedId
  };
}

export {
  save,
  markAsSelected
};
