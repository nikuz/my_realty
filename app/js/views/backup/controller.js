'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import constants from '../../modules/constants';
import * as StateActions from '../../actions/state';
import * as ListActions from '../../actions/list';
import * as BackupActions from '../../actions/backup';
import * as StorageController from '../../controllers/storage';
import {deepClone} from '../../modules/object';
import BackupView from './view';

const mapStateToProps = function(state) {
  return {
    state: state.state,
    backup: state.backup,
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  var backupRequest;
  return {
    create: function(backup, list) {
      list = deepClone(list);
      _.each(list, function(item) {
        item.selected = false;
        item.edited = false;
      });
      backupRequest = StorageController.post(backup, list);
      backupRequest.then(
        function(response) {
          if (backupRequest) {
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
    download(backup, list, masterFileName) {
      backupRequest = StorageController.get(backup, masterFileName);
      backupRequest.then(
        function(response) {
          if (backupRequest) {
            let successDownloadedCount = 0;
            _.each(response.list, function(value, key) {
              if (!backup.do_not_overwrite === false && list[key]) {
                return;
              }
              successDownloadedCount++;
            });
            let resultBackup = Object.assign({}, response.backup);
            resultBackup.success_download = successDownloadedCount;
            dispatch(BackupActions.create(resultBackup));
            dispatch(
              ListActions.populate(response.list, !backup.do_not_overwrite)
            );
          }
        },
        function() {
          dispatch(
            BackupActions.downloadError(constants('backup_download_error'))
          );
        }
      );
    },
    doNotOverWriteChange(value) {
      dispatch(BackupActions.doNotOverWriteChange(value));
    },
    close: function() {
      backupRequest = null;
      dispatch(StateActions.change('initial'));
    },
    reset() {
      dispatch(BackupActions.reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackupView);
