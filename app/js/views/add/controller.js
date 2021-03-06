'use strict';

import * as React from 'react';
import { connect } from 'react-redux';
import * as ListActions from '../../actions/list';
import * as StateActions from '../../actions/state';
import AddView from './view';

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
    save: function(name, data, previousName) {
      dispatch(ListActions.save(name, data, previousName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddView);
