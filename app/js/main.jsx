'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import { Provider } from 'react-redux';
import AppStore from './store';
import Manager from './views/manager/controller';
import Filter from './views/filter/controller';
import List from './views/list/controller';
import Preview from './views/preview/controller';
import MapView from './views/map/controller';
import AddRealtyOvl from './views/add/controller';

import 'styles/basic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    };
  }
  componentDidMount() {
    AppStore.subscribe(() => {
      var filter = AppStore.getState().filter,
        viewType = _.find(filter.view, {active: true});

      if (viewType.id !== this.state.view) {
        this.setState({
          view: viewType.id
        });
      }
    });
  }
  render() {
    return (
      <div id="content">
        <Filter />
        {this.state.view === 'list' ?
          <div id="list_view_wrapper">
            <List />
            <Preview />
          </div>
          :
          <MapView />
        }
        <AddRealtyOvl />
        <Manager />
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={AppStore}>
      <App />
    </Provider>,
    document.getElementById('wrap')
  );
});
