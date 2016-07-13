'use strict';

import * as config from 'config';
import * as ajax from 'modules/ajax';

function authorize() {
  return ajax.get({
    url: config.STORAGE_AUTH_URL,
    headers: {
      'Authorization': 'Basic ' + btoa(config.STORAGE_ACCOUNT_ID + ':' + config.STORAGE_APP_KEY)
    },
    success: function(response) {
      console.log('Success ', response);
    },
    error: function(error) {
      console.log('Error ', error);
    }
  });
}

// ----------------
// public methods
// ----------------

function get() {
  authorize();
}

function post() {

}

// ---------
// interface
// ---------

export {
  get,
  post
};
