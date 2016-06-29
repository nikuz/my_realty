'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './store';
import Manager from './views/manager/controller';
import List from './views/list/controller';
import AddRealtyOvl from './views/add/controller';

import 'css/basic';
// import 'css/form';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="content">
          <Manager />
          <List />
        </div>
        <AddRealtyOvl />
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
