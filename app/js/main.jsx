'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as _ from 'underscore';
import AppStore from './store';
import Manager from './views/manager/controller';
import Filter from './views/filter/controller';
import List from './views/list/controller';
import Preview from './views/preview/controller';
import MapView from './views/map/controller';
import AddRealtyOvl from './views/add/controller';
import ComparatorNotifier from './views/comparator-notifier/controller';
import Comparator from './views/comparator/controller';
import BackupButton from './views/backup-button/controller';
import Backup from './views/backup/controller';
import PhotoGallery from './views/photo-gallery/controller';

import '../styles/basic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    };
  }
  componentDidMount() {
    AppStore.subscribe(() => {
      var store = AppStore.getState(),
        filter = store.filter,
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
        <div id="navigation">
          <BackupButton />
          <Filter />
        </div>
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
        <ComparatorNotifier />
        <Comparator />
        <Backup />
        <PhotoGallery />
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
