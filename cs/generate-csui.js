const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = `import { App } from 'vue';\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element;
    if (show || exportEmpty) {
      importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${
        type === 'methods' ? '' : '.vue'
      }';\n`;
      packages.push(name);
    }
  });
});
let installFunction = `function install(app: App) {
  const packages = [${packages.join(',')}];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}`;
let fileStr = `${importStr}
${installFunction}
export { install, ${packages.join(',')}  };
export default { install, version:'${package.version}'};`;
fs.outputFile(
  path.resolve(__dirname, '../src/packages/csui.vue.ts'),
  fileStr,
  'utf8',
  (error) => {
    // logger.success(`${package_config_path} 文件写入成功`);
  }
);
