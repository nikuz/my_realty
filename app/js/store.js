'use strict';

import { createStore } from 'redux';
import reducers from './reducers/main';
import * as storage from './modules/storage';

const store = createStore(reducers, {
  manager: storage.get('manager'),
  list: storage.get('list')
});

store.subscribe(function() {
  if (window.NODE_ENV !== 'production') {
    console.log(store.getState());
  }
});

export default store;
