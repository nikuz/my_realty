'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from 'actions/state';
import * as BackupActions from 'actions/state';
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
    create: function(list) {
      createBackupRequest = StorageController.post(list);
      createBackupRequest.then(
        function(response) {
          if (createBackupRequest) {
            console.log(response);
            // dispatch(BackupActions.set(response));
          }
        },
        function(err) {
          console.log(err);
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
