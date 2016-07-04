'use strict';

function split(price) {
  return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&thinsp;');
}

export {
  split
};
