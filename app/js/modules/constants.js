'use strict';

function get(name) {
  var value;
  if (name && typeof name === 'string') {
    value = chrome.i18n.getMessage(name);
  } else {
    value = name;
  }
  return value !== '' ? value : name;
}

export {
  get
};
