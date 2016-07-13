'use strict';

function hex(buffer) {
  var hexCodes = [],
    view = new DataView(buffer),
    value,
    stringValue,
    padding = '00000000',
    paddedValue;

  for (let i = 0; i < view.byteLength; i += 4) {
    // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
    value = view.getUint32(i);
    // toString(16) will give the hex representation of the number without padding
    stringValue = value.toString(16);
    // We use concatenation and slice for padding
    paddedValue = (padding + stringValue).slice(-padding.length);
    hexCodes.push(paddedValue);
  }

  // Join all the hex strings into one
  return hexCodes.join('');
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

function sha1(obj) {
  if (obj instanceof Object) {
    obj = JSON.stringify(obj);
  }

  var buffer = new TextEncoder('utf-8').encode(obj);
  return new Promise(function(resolve) {
    crypto.subtle.digest('SHA-1', buffer).then(function(hash) {
      resolve(hex(hash));
    });
  });
}

// ---------
// interface
// ---------

export {
  deepClone,
  getValueByPath,
  sha1
};
