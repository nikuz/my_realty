'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from 'actions/state';
import * as ListActions from 'actions/list';
import ComparatorView from './view';

const mapStateToProps = function(state) {
  return {
    state: state.state,
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    close: function() {
      dispatch(StateActions.change('initial'));
    },
    removeFromCompare: function(id) {
      dispatch(ListActions.removeFromCompare(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComparatorView);
