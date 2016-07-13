'use strict';

function addParamsMarker(rUrl){
  return (/\?/.test(rUrl) ? '&' : '?');
}

function paramsSerialise(data){
  var dataString = '';
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      if(data[i] instanceof Array){
        data[i].forEach(function(item) {
          dataString += `${i}[]=${encodeURIComponent(item)}&`;
        });
      } else {
        dataString += `${i}=${encodeURIComponent(data[i])}&`;
      }
    }
  }
  return dataString.replace(/&$/, '');
}

function ajax(options) {
  options = options || {};

  return new Promise(function(resolve, reject) {
    var body = options.body;
    switch (options.type) {
      case 'GET':
        if (body) {
          options.url += addParamsMarker(options.url) + paramsSerialise(body);
          body = null;
        }
        break;
      case 'POST':
      case 'PUT':
        if (body instanceof Object && !(body instanceof File) && !(body instanceof FormData)) {
          body = paramsSerialise(body);
        }
        // console.log(body);
        break;
    }

    fetch(options.url, {
      method: options.type,
      headers: options.headers,
      body: body,
      cache: options.change === false ? 'no-cache' : 'default'
    }).then(
      function(response) {
        if (response.status >= 200 && response.status < 400) {
          var extractBodyMethod = 'text';
          if (options.responseDataType === 'json') {
            extractBodyMethod = 'json';
          }
          response[extractBodyMethod]().then(
            function(data) {
              resolve(data);
            },
            function(error) {
              reject(error);
            }
          );
        } else {
          reject(response.status);
        }
      },
      function(error) {
        reject(error);
      }
    );
  });
}

// ----------------
// public methods
// ----------------

function get(options) {
  options.type = 'GET';
  return ajax(options);
}

function post(options) {
  options.type = 'POST';
  return ajax(options);
}

// ---------
// interface
// ---------

export {
  get,
  post
};
