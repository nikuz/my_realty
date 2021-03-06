'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from '../../actions/state';
import PreviewView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    photoOpen: function(photoId) {
      dispatch(
        StateActions.change('photo_gallery', {photoId})
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewView);
