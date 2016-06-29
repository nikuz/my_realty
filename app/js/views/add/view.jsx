'use strict';

import * as React from 'react';
import constants from 'modules/constants';
import Overlay from 'components/overlay/view';
import SegmentedControl from 'components/segmented-control/view';
import {ButtonBlue} from 'components/buttons/view';

import './style.less';

class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction_type: {
        rent: {
          name: constants('add_transaction_type_rent'),
          selected: true
        },
        buy: {
          name: constants('add_transaction_type_buy')
        }
      }
    };
    this.submit = this.submit.bind(this);
  }
  submit() {
    console.log(this.state);
  }
  render() {
    var state = this.state,
      props = this.props;

    if (props.state.name === 'add_realty_ovl') {
      return (
        <Overlay title={constants('add_overlay_title')} close={props.close}>
          <div id="add_realty_ovl">
            <h3>Тип сделки:</h3>
            <SegmentedControl items={state.transaction_type} />
            <ButtonBlue text="Save" onClick={this.submit} />
          </div>
        </Overlay>
      );
    } else {
      return null;
    }
  }
}

export default AddView;
