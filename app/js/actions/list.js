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

function addToFavorites(realtyId) {
  return {
    type: 'LIST_ADD_TO_FAVORITES',
    realtyId
  };
}

function removeFromFavorites(realtyId) {
  return {
    type: 'LIST_REMOVE_FROM_FAVORITES',
    realtyId
  };
}

export {
  save,
  markAsSelected,
  edit,
  remove,
  addToFavorites,
  removeFromFavorites
};
