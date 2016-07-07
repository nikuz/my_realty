'use strict';

function sortChange(sort) {
  return {
    type: 'FILTER_SORT_CHANGE',
    name: sort
  };
}
function sortClear() {
  return {
    type: 'FILTER_SORT_CLEAR'
  };
}

function filterChange(filter) {
  return {
    type: 'FILTER_FILTER_CHANGE',
    name: filter
  };
}
function filterClear() {
  return {
    type: 'FILTER_FILTER_CLEAR'
  };
}

function viewChange(view) {
  return {
    type: 'FILTER_VIEW_CHANGE',
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
