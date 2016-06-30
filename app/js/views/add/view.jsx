'use strict';

import * as React from 'react';
import * as _ from 'underscore';
import constants from 'modules/constants';
import apartmentModel from 'models/apartment';
import houseModel from 'models/house';
import Overlay from 'components/overlay/view';
import SegmentedControl from 'components/segmented-control/view';
import TextInput from 'components/text-input/view';
import Selector from 'components/selector/view';
import {ButtonBlue} from 'components/buttons/view';

import './style.less';

class AddView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        data: {
          value: ''
        }
      },
      transaction_type: {
        rent: {
          name: constants('add_transaction_type_rent')
        },
        buy: {
          name: constants('add_transaction_type_buy')
        }
      },
      realty_type: {
        apartment: {
          name: constants('add_realty_type_apartment')
        },
        house: {
          name: constants('add_realty_type_house')
        }
      },
      model: null
    };
    this.realtyTypeSelected = this.realtyTypeSelected.bind(this);
    this.submit = this.submit.bind(this);
  }
  realtyTypeSelected(type) {
    var model;
    switch (type) {
      case 'apartment':
        model = Object.assign({}, apartmentModel);
        break;
      case 'house':
        model = Object.assign({}, houseModel);
        break;
    }
    this.setState({
      model
    });
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
            <section>
              <h3>{constants('add_name')}</h3>
              <TextInput data={state.name.data} />
            </section>
            <section>
              <h3>{constants('add_transaction_type')}</h3>
              <SegmentedControl items={state.transaction_type} />
            </section>
            <section>
              <h3>{constants('add_realty_type')}</h3>
              <SegmentedControl items={state.realty_type} onSelect={this.realtyTypeSelected} />
            </section>
            {_.map(state.model, function(item, key) {
              return (
                <section key={key}>
                  <h3>{item.name}</h3>
                  {_.map(item.data, function(dataItem, dataKey) {
                    var values;
                    switch (dataItem.type) {
                      case 'segments':
                        values = (
                          <SegmentedControl
                            items={dataItem.values}
                          />
                        );
                        break;
                      case 'number':
                        values = (
                          <TextInput
                            data={dataItem.values}
                            type="number"
                            size="small"
                          />
                        );
                        break;
                      case 'selector':
                        values = (
                          <Selector
                            items={dataItem.values}
                          />
                        );
                        break;
                      case 'year': {
                        let years = {};
                        for (let i = 1800, l = new Date().getFullYear(); i <= l; i++) {
                          years[i] = {
                            name: i
                          };
                        }
                        dataItem.values = years;
                        values = <Selector items={dataItem.values} />;
                        break;
                      }
                    }
                    return (
                      <div key={dataKey}>
                        <h5 dangerouslySetInnerHTML={{__html: dataItem.name}} />
                        {values}
                      </div>
                    );
                  })}
                </section>
              );
            })}

            <div>
              <ButtonBlue text="Save" onClick={this.submit} />
            </div>
          </div>
        </Overlay>
      );
    } else {
      return null;
    }
  }
}

export default AddView;
