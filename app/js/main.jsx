'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppStore from './store';
import Manager from './views/manager/controller';

import 'css/basic';
// import 'css/form';

class App extends React.Component {
  render() {
    return (
      <div id="content">
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
