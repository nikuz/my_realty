'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import PreviewView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewView);
