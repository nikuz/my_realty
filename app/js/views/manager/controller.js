'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as ManagerActions from 'actions/manager';
import ManagerView from './view';

const mapStateToProps = function(state) {
  return {
    manager: state.manager
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    sortChange: function(name) {
      dispatch(ManagerActions.sortChange(name))
    },
    filterChange: function(name) {
      dispatch(ManagerActions.filterChange(name))
    },
    viewChange: function(name) {
      dispatch(ManagerActions.viewChange(name))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerView);
