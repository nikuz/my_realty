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

function sha1(string) {
  var buffer = new TextEncoder('utf-8').encode(string);
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
  sha1
};