'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import Overlay from 'components/overlay/view';

import './style.less';

class AddView extends React.Component {
  render() {
    var props = this.props;
    if (props.state.name === 'add_realty_ovl') {
      return (
        <Overlay title="Add new realty" close={props.close}>
          <div>
            <div id="add_realty_ovl">
              {constants('add_overlay_title')}
            </div>
            <h3>Тип сделки:</h3>
          </div>
        </Overlay>
      );
    } else {
      return null;
    }
  }
}

export default AddView;
