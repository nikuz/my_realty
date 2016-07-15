'use strict';

function get(name) {
  if (name) {
    return chrome.i18n.getMessage(name);
  } else {
    return '';
  }
}

function fill(data) {
  for (let i in data) {
    if (data.hasOwnProperty(i)) {
      let name = data[i].name;
      if (name && typeof name === 'string') {
        let value = get(name);
        if (value !== '') {
          data[i].name = value;
        }
      }
    }
  }
  return data;
}

export {
  fill,
  get
};
