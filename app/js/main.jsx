'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './store';
import AddButton from './views/add-button/controller';
import Filter from './views/filter/controller';
import List from './views/list/controller';
import Preview from './views/preview/controller';
import AddRealtyOvl from './views/add/controller';

import 'styles/basic';

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <AddButton />
        <List />
        <AddRealtyOvl />
        <Preview />
        <Filter />
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
