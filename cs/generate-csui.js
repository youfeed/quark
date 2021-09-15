const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = '';
const packages = [];

config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element;
    if (show || exportEmpty) {
      importStr += `import './__VUE/${name.toLowerCase()}/cs-${name.toLocaleLowerCase()}.mjs';\n`;
      packages.push(name);
    }
  });
});

console.log(importStr, packages, 89); // [Button,Card]

let fileStr = `${importStr}`;

fs.outputFile(
  path.resolve(__dirname, '../src/packages/index.js'),
  fileStr,
  'utf8',
  (error) => {
    // logger.success(`${package_config_path} 文件写入成功`);
  }
);
