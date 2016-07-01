'use strict';

// ----------------
// public methods
// ----------------

function get(name) {
  var data;
  if (name) {
    data = localStorage[name];
    try {
      data = JSON.parse(data);
    } catch (e) {}
  } else {
    data = localStorage;
  }
  return data;
}

function set(name, data) {
  if (data instanceof Date) {
    data = data.toString();
  } else if (data instanceof Object) {
    data = JSON.stringify(data);
  }
  localStorage[name] = data;
}

function check(name) {
  return !!localStorage[name];
}
function clear(name) {
  delete localStorage[name];
}


// ---------
// interface
// ---------

export {
  get,
  set,
  check,
  clear
};
