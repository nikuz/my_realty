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

function doNotOverWriteChange(value) {
  return {
    type: 'BACKUP_DO_NOT_OVERWRITE_CHANGE',
    value
  };
}

function downloadError(error) {
  return {
    type: 'BACKUP_DOWNLOAD_ERROR',
    error
  };
}

function reset() {
  return {
    type: 'BACKUP_RESET'
  };
}

export {
  create,
  error,
  doNotOverWriteChange,
  downloadError,
  reset
};
