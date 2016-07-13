'use strict';

import * as config from 'config';
import * as ajax from 'modules/ajax';
import {hash} from 'modules/object';

function authorize() {
  return new Promise(function(resolve, reject) {
    ajax.get({
      url: config.STORAGE_AUTH_URL,
      headers: {
        'Authorization': 'Basic ' + btoa(config.STORAGE_ACCOUNT_ID + ':' + config.STORAGE_APP_KEY)
      },
      responseDataType: 'json',
      success: function(response) {
        resolve(response);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
}

function getUploadUrl(options) {
  options = options || {};
  return new Promise(function(resolve, reject) {
    ajax.get({
      url: options.apiUrl + config.STORAGE_GET_UPLOAD_URL,
      headers: {
        'Authorization': options.authToken
      },
      data: {
        bucketId: config.STORAGE_BUCKET_ID
      },
      responseDataType: 'json',
      success: function(response) {
        resolve(response);
      },
      error: function(error) {
        reject(error);
      }
    });
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
          return hash(list);
        },
        reject
      )
      .then(function(hashedList) {
        console.log(uploadData);

        var dataString = JSON.stringify(list);
        console.log({
          'Authorization': uploadData.authorizationToken,
          'Content-Type': 'application/json',
          'X-Bz-File-Name': uploadData.authorizationToken,
          'X-Bz-Content-Sha1': hashedList
        });
        ajax.post({
          url: uploadData.uploadUrl,
          headers: {
            'Authorization': uploadData.authorizationToken,
            'Content-Type': 'application/json',
            'X-Bz-File-Name': uploadData.authorizationToken,
            'X-Bz-Content-Sha1': hashedList
          },
          data: dataString,
          responseDataType: 'json',
          success: function(response) {
            resolve(response);
          },
          error: function(error) {
            reject(error);
          }
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
