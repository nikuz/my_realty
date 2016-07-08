'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as StateActions from 'actions/state';
import * as ListActions from 'actions/list';
import AddButtonView from './view';

const mapStateToProps = function(state) {
  return {
    list: state.list
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    addRealty: function() {
      dispatch(StateActions.change('add_realty_ovl'));
    },
    removeRealty: function(id) {
      dispatch(ListActions.remove(id));
    },
    editRealty: function(id) {
      dispatch(ListActions.edit(id));
      setTimeout(function() {
        dispatch(StateActions.change('add_realty_ovl'));
      }, 10);
    },
    addToFavorites: function(id) {
      dispatch(ListActions.addToFavorites(id));
    },
    removeFromFavorites: function(id) {
      dispatch(ListActions.removeFromFavorites(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButtonView);
