'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from 'actions/state';
import AddView from './view';

const mapStateToProps = function(state) {
  return {
    state: state.state
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    close: function() {
      dispatch(StateActions.change('initial'))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddView);
