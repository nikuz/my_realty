'use strict';

function convertStringToArrayBufferView(string) {
  var bytes = new Uint8Array(string.length);
  for (let i = 0; i < string.length; i++) {
    bytes[i] = string.charCodeAt(i);
  }
  return bytes;
}

function convertArrayBufferToHexaDecimal(buffer) {
  var data_view = new DataView(buffer),
    hex = '', c;

  for(let i = 0, l = data_view.byteLength; i < l; i++) {
    c = data_view.getUint8(i).toString(16);
    if(c.length < 2) {
      c = '0' + c;
    }

    hex += c;
  }

  return hex;
}

// ----------------
// public methods
// ----------------

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function getValueByPath(obj, path) {
  if (!obj) {
    return obj;
  }
  path = path.split('.');
  if (path.length > 1) {
    return getValueByPath(obj[path.shift()], path.join('.'));
  } else {
    return obj[path.shift()];
  }
}

function hash(obj) {
  if (obj instanceof Object) {
    obj = JSON.stringify(obj);
  }

  return new Promise(function(resolve) {
    crypto.subtle.digest(
      {
        name: "SHA-1"
      },
      convertStringToArrayBufferView(obj)
    ).then(function(result) {
      resolve(convertArrayBufferToHexaDecimal(result));
    });
  });
}

// ---------
// interface
// ---------

export {
  deepClone,
  getValueByPath,
  hash
};
