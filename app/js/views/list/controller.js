'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as ListActions from 'actions/list';
import ListView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list,
    filter: state.filter
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    markAsSelected: function(selectedId) {
      history.pushState(null, '', '/index.html');
      dispatch(ListActions.markAsSelected(selectedId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
