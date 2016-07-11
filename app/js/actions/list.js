'use strict';

function save(name, data, previousName) {
  return {
    type: 'LIST_SAVE',
    name,
    data,
    previousName
  };
}

function markAsSelected(selectedId) {
  return {
    type: 'LIST_MARK_AS_SELECTED',
    selectedId
  };
}

function deselectAll(selectedId) {
  return {
    type: 'LIST_DESELECT_ALL',
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

function addToCompare(realtyId) {
  return {
    type: 'LIST_ADD_TO_COMPARE',
    realtyId
  };
}

function removeFromCompare(realtyId) {
  return {
    type: 'LIST_REMOVE_FROM_COMPARE',
    realtyId
  };
}

export {
  save,
  markAsSelected,
  deselectAll,
  edit,
  remove,
  addToFavorites,
  removeFromFavorites,
  addToCompare,
  removeFromCompare
};
