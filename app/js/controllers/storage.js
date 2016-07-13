'use strict';

import * as config from 'config';
import * as ajax from 'modules/ajax';
import {sha1} from 'modules/object';

function authorize() {
  return ajax.get({
    url: config.STORAGE_AUTH_URL,
    headers: {
      'Authorization': 'Basic ' + btoa(config.STORAGE_ACCOUNT_ID + ':' + config.STORAGE_APP_KEY)
    },
    responseDataType: 'json'
  });
}

function getUploadUrl(options) {
  options = options || {};
  return ajax.get({
    url: options.apiUrl + config.STORAGE_GET_UPLOAD_URL,
    headers: {
      'Authorization': options.authToken
    },
    body: {
      bucketId: config.STORAGE_BUCKET_ID
    },
    responseDataType: 'json'
  });
}

// ----------------
// public methods
// ----------------

function get() {
  authorize();
}

function post(list) {
  var uploadData;
  return new Promise(function(resolve, reject) {
    authorize()
      .then(
        function(response) {
          return response;
        },
        reject
      ).then(function(authorisationData) {
        return getUploadUrl({
          apiUrl: authorisationData.apiUrl,
          authToken: authorisationData.authorizationToken
        });
      }).then(
        function(result) {
          uploadData = result;
          return sha1(list);
        },
        reject
      )
      .then(function(hashedList) {
        var dataString = JSON.stringify(list);
        ajax.post({
          url: uploadData.uploadUrl,
          headers: {
            'Authorization': uploadData.authorizationToken,
            'Content-Type': 'application/json',
            'X-Bz-File-Name': uploadData.authorizationToken,
            'X-Bz-Content-Sha1': hashedList
          },
          body: dataString,
          responseDataType: 'json'
        }).then(function(response) {
          console.log(response);
        }, function(error) {
          console.log(error);
        });
      });
  });
}

// ---------
// interface
// ---------

export {
  get,
  post
};
