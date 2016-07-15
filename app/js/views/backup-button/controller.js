'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from '../../actions/state';
import BackupButtonView from './view';

const mapStateToProps = function() {
  return {};
};

const mapDispatchToProps = function(dispatch) {
  return {
    openBackup: function() {
      dispatch(StateActions.change('backup'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackupButtonView);
