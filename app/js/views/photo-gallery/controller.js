'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from '../../actions/state';
import PhotoGalleryView from './view';

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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGalleryView);
