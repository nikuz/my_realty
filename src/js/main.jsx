'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'css/basic';
import 'css/form';

class App extends React.Component {
  componentDidMount() {

  };
  render() {
    return (
      <div id="content">
        My realty
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
