'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from '../../actions/state';
import ComparatorNotifierView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    openComparator: function() {
      dispatch(StateActions.change('comparator'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComparatorNotifierView);
