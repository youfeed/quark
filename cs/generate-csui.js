// const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = '';

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element;
    if (show || exportEmpty) {
      importStr += `import './packages/${name.toLowerCase()}/cs-${name.toLocaleLowerCase()}.mjs';\n`;
    }
  });
});


let fileStr = `${importStr}`;

fs.outputFile(
  path.resolve(__dirname, '../src/index.js'),
  fileStr,
  'utf8',
  (error) => {
    // logger.success();
  }
);
