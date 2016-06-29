'use strict';

import * as React from 'react';
import Overlay from 'components/overlay/view';

import './style.less';

class AddView extends React.Component {
  render() {
    var props = this.props;
    if (props.state.name === 'add_realty_ovl') {
      return (
        <Overlay title="Add new realty" close={props.close}>
          <div id="add_realty_ovl">
            Add realty overlay
          </div>
        </Overlay>
      );
    } else {
      return null;
    }
  }
}

export default AddView;
