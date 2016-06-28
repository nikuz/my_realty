'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'css/basic';
import 'css/form';

class App extends React.Component {
  componentDidMount() {

  };
  render() {
    var hello = chrome.i18n.getMessage('hello');
    return (
      <div id="content">
        My realty {hello}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />,
    document.getElementById('wrap')
  );
});
