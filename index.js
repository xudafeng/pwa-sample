'use strict';

var logger = function(info) {
  document.querySelector('#info').innerHTML = info;
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/'
  }).then(function(sw) {
    logger('registration worked');
  }).catch(function() {
    logger('registration failed');
  });
} else {
  logger('not support');
}
