'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import constants from 'modules/constants';
import * as StateActions from 'actions/state';
import * as BackupActions from 'actions/backup';
import * as StorageController from 'controllers/storage';
import BackupView from './view';

const mapStateToProps = function(state) {
  return {
    state: state.state,
    backup: state.backup,
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  var createBackupRequest;
  return {
    create: function(backup, list) {
      createBackupRequest = StorageController.post(backup, list);
      createBackupRequest.then(
        function(response) {
          if (createBackupRequest) {
            dispatch(BackupActions.create(response));
          }
        },
        function() {
          dispatch(
            BackupActions.error(constants('backup_create_error'))
          );
        }
      );
    },
    close: function() {
      createBackupRequest = null;
      dispatch(StateActions.change('initial'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackupView);
