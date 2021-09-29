// const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = '';

fs.copy('./iconfont/icon.svg', './dist/iconfont/icon.svg', err => {
    if (err) return console.error(err);
    console.log('success!');
});

fs.copy('./src/packages', './dist/packages', err => {
    if (err) return console.error(err);
    console.log('success!');
});

config.nav.map((item) => {
    item.packages.forEach((element) => {
        let { name, show, type, exportEmpty } = element;
        if (show || exportEmpty) {
            importStr += `import './packages/${name.toLowerCase()}/cs-${name.toLocaleLowerCase()}.mjs';\n`;
        }
    });
});

let fileStr = `${importStr}
import CsDialog from './packages/dialog/cs-dialog.mjs';
window.CsDialog = CsDialog;
`;

fs.outputFile(
    path.resolve(__dirname, '../dist/index.js'),
    fileStr,
    'utf8'
);
