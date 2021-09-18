const fs = require('fs-extra');

fs.copy('./iconfont/icon.svg', './dist/iconfont/icon.svg', err => {
  if(err) return console.error(err);
  console.log('success!');
});