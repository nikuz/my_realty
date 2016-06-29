'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from 'actions/state';
import * as ListActions from 'actions/list';
import ListView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list
  }
};

const mapDispatchToProps = function(dispatch) {
  return {
    addRealty: function() {
      dispatch(StateActions.change('add_realty_ovl'))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
