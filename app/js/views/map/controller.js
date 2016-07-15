'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as ListActions from '../../actions/list';
import MapView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list,
    filter: state.filter
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    markAsSelected: function(selectedId) {
      dispatch(ListActions.markAsSelected(selectedId));
    },
    deselectAll: function() {
      dispatch(ListActions.deselectAll());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapView);
