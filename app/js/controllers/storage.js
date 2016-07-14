'use strict';

import * as _ from 'underscore';
import * as config from 'config';
import * as ajax from 'modules/ajax';
import {sha1} from 'modules/object';

const tokenLivePeriod = 82800000; // 23 hours

function authorize(options) {
  options = options || {};
  if (options.authorizationToken && Date.now() - Number(options.authorizationTokenDate) < tokenLivePeriod) {
    return Promise.resolve(options);
  } else {
    return ajax.get({
      url: config.STORAGE_AUTH_URL,
      headers: {
        'Authorization': 'Basic ' + btoa(config.STORAGE_ACCOUNT_ID + ':' + config.STORAGE_APP_KEY)
      },
      responseDataType: 'json'
    });
  }
}

function getUploadUrl(options) {
  options = options || {};
  if (options.uploadUrl && Date.now() - Number(options.uploadUrlDate) < tokenLivePeriod) {
    return Promise.resolve(options);
  } else {
    return ajax.get({
      url: options.apiUrl + config.STORAGE_GET_UPLOAD_URL,
      headers: {
        'Authorization': options.authorizationToken
      },
      body: {
        bucketId: config.STORAGE_BUCKET_ID
      },
      responseDataType: 'json'
    });
  }
}

function removeFileById(options) {
  options = options || {};
  ajax.get({
    url: options.apiUrl + config.STORAGE_DELETE_FILE_URL,
    headers: {
      'Authorization': options.authorizationToken
    },
    body: {
      fileName: options.fileName,
      fileId: options.fileId
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

function post(backup, list) {
  var result = {};

  return new Promise(function(resolve, reject) {
    authorize(backup)
      .then(
        function(response) {
          _.extend(result, {
            authorizationToken: response.authorizationToken,
            authorizationTokenDate: response.authorizationTokenDate || Date.now(),
            fileName: backup.fileName || response.authorizationToken,
            apiUrl: response.apiUrl
          });
          return response;
        },
        reject
      ).then(function() {
        return getUploadUrl({
          uploadUrl: backup.uploadUrl,
          uploadUrlDate: backup.uploadUrlDate,
          apiUrl: result.apiUrl,
          authorizationToken: result.authorizationToken,
          uploadAuthorizationToken: backup.uploadAuthorizationToken
        });
      }).then(
        function(response) {
          _.extend(result, {
            uploadUrl: response.uploadUrl,
            uploadUrlDate: response.uploadUrlDate || Date.now(),
            uploadAuthorizationToken: response.uploadAuthorizationToken || response.authorizationToken
          });
          return sha1(list);
        },
        reject
      )
      .then(function(hashedList) {
        var dataString = JSON.stringify(list);
        ajax.post({
          url: result.uploadUrl,
          headers: {
            'Authorization': result.uploadAuthorizationToken,
            'Content-Type': 'application/json',
            'X-Bz-File-Name': result.fileName,
            'X-Bz-Content-Sha1': hashedList
          },
          body: dataString,
          responseDataType: 'json'
        }).then(
          function(response) {
            _.extend(result, {
              uploadTimestamp: response.uploadTimestamp,
              fileId: response.fileId
            });
            if (backup.fileId) {
              removeFileById({
                fileName: backup.fileName,
                fileId: backup.fileId,
                authorizationToken: result.authorizationToken,
                apiUrl: result.apiUrl
              });
            }
            resolve(result);

          },
          reject
        );
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
