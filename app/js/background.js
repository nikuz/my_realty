'use strict';

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({
    'url': chrome.extension.getURL('index.html')
  }, function(tab) {
    console.log(tab);
  });
});