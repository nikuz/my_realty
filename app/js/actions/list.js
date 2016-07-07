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
    type: 'LIST_MARK_AS_SELECTED',
    selectedId
  };
}

function edit(editId) {
  return {
    type: 'LIST_EDIT',
    editId
  };
}

function remove(removeId) {
  return {
    type: 'LIST_REMOVE',
    removeId
  };
}

export {
  save,
  markAsSelected,
  edit,
  remove
};
