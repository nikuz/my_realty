'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as FilterActions from 'actions/filter';
import * as ListActions from 'actions/list';
import FilterView from './view';

const mapStateToProps = function(state) {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    sortChange: function(name) {
      dispatch(FilterActions.sortChange(name));
    },
    sortClear: function() {
      dispatch(FilterActions.sortClear());
    },
    filterChange: function(name) {
      dispatch(FilterActions.filterChange(name));
    },
    filterClear: function() {
      dispatch(FilterActions.filterClear());
    },
    viewChange: function(name) {
      dispatch(FilterActions.viewChange(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterView);
