'use strict';

import * as _ from 'underscore';
import * as config from '../config';
import * as ajax from '../modules/ajax';
import {sha1} from '../modules/string';
import JSZip from 'jszip';

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

function get(backup, masterFileName) {
  return new Promise(function(resolve, reject) {
    var result = {};
    authorize(backup)
      .then(
        function(response) {
          _.extend(result, {
            authorizationToken: response.authorizationToken,
            authorizationTokenDate: response.authorizationTokenDate || Date.now(),
            fileName: backup.fileName || response.authorizationToken,
            apiUrl: response.apiUrl
          });

          var baseUrl = response.apiUrl.replace(/api(\d+?)/, 'f$1');
          return ajax.get({
            url: `${baseUrl}/file/${config.STORAGE_BUCKET_NAME}/${masterFileName}`,
            headers: {
              'Authorization': response.authorizationToken
            }
          });
        },
        reject
      ).then(
        function(response) {
          JSZip.loadAsync(response).then(function(zip) {
            zip.file('list.json').async('string').then(function(text) {
              result.masterFileName = masterFileName;
              resolve({
                backup: result,
                list: JSON.parse(text)
              });
            });
          });
        },
        reject
      );
  });
}

function post(backup, list) {
  return new Promise(function(resolve, reject) {
    var result = {},
      zip = new JSZip(),
      dataString = JSON.stringify(list),
      dataArchive = zip.file('list.json', dataString);

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

          return dataArchive.generateAsync({
            type: 'binarystring',
            compression: 'DEFLATE'
          }).then(function(string) {
            dataString = string;
            return sha1(string);
          });
        },
        reject
      )
      .then(function(hashedList) {
        ajax.post({
          url: result.uploadUrl,
          headers: {
            'Authorization': result.uploadAuthorizationToken,
            'Content-Type': 'application/zip',
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
              // remove previous copy of the backup
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
