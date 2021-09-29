const fs = require('fs-extra');

fs.copy('./iconfont/icon.svg', './lib/iconfont/icon.svg', err => {
    if (err) return console.error(err);
    console.log('success!');
});
fs.copy('./iconfont/icon.svg', './es/iconfont/icon.svg', err => {
    if (err) return console.error(err);
    console.log('success!');
});