'use strict';

export default function(name) {
  return chrome.i18n.getMessage(name);
};
