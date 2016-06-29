'use strict';

function sortChange(sort) {
  return {
    type: 'MANAGER_SORT_CHANGE',
    name: sort
  };
}
function sortClear() {
  return {
    type: 'MANAGER_SORT_CLEAR'
  };
}

function filterChange(filter) {
  return {
    type: 'MANAGER_FILTER_CHANGE',
    name: filter
  };
}
function filterClear() {
  return {
    type: 'MANAGER_FILTER_CHANGE'
  };
}

function viewChange(view) {
  return {
    type: 'MANAGER_VIEW_CHANGE',
    name: view
  };
}

export {
  sortChange,
  sortClear,
  filterChange,
  filterClear,
  viewChange
};
