'use strict';

function create(data) {
  return {
    type: 'BACKUP_CREATE',
    data
  };
}

function error(error) {
  return {
    type: 'BACKUP_ERROR',
    error
  };
}

export {
  create,
  error
};
