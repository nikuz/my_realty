'use strict';

function addParamsMarker(rUrl){
  return (/\?/.test(rUrl) ? '&' : '?');
}

function paramsSerialise(data){
  var dataString = '';
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      if(value instanceof Array){
        value.forEach(function(item) {
          dataString += `${key}[]=${encodeURIComponent(item)}&`;
        });
      } else {
        dataString += `${key}=${encodeURIComponent(value)}&`;
      }
    }
  }
  return dataString.replace(/&$/, '');
}

function ajax(options) {
  var opts = options || {},
    request = new XMLHttpRequest,
    success = opts.success || function() {},
    error = opts.error || function() {},
    rType = opts.type,
    rUrl = opts.url,
    dataString = null;

  if(opts.cache === false){
    rUrl += `${addParamsMarker(rUrl)}t=${Date.now()}`;
  }
  if(rType === 'GET' && opts.data){
    rUrl += addParamsMarker(rUrl) + paramsSerialise(opts.data);
  }

  request.open(rType, rUrl, true);

  if(opts.data && rType === 'POST'){
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    dataString = paramsSerialise(opts.data);
  }

  if (opts.headers) {
    for (let i in opts.headers) {
      if (opts.headers.hasOwnProperty(i)) {
        request.setRequestHeader(i, opts.headers[i]);
      }
    }
  }

  request.onload = function(){
    var response = request.responseText;
    if(request.status >= 200 && request.status < 400){
      if(opts.dataType === 'json'){
        response = JSON.parse(response);
      }
      success(response);
    } else {
      error(request.status);
    }
  };

  request.onerror = function(response){
    error(response);
  };

  request.send(dataString || null);
  return request;
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
