'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from 'actions/state';
import * as ListActions from 'actions/list';
import EditButtonView from './view';

const mapStateToProps = function(state) {
  return {

  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    editRealty: function(id) {
      dispatch(ListActions.edit(id));
      setTimeout(function() {
        dispatch(StateActions.change('add_realty_ovl'));
      }, 10);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditButtonView);
