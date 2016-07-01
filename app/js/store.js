'use strict';

import { createStore } from 'redux';
import reducers from './reducers/main';
import * as storage from './modules/storage';

const store = createStore(reducers, storage.get('store'));

store.subscribe(function() {
  var state = store.getState();
  storage.set('store', state);
  if (window.NODE_ENV !== 'production') {
    console.log(state);
  }
});

export default store;
