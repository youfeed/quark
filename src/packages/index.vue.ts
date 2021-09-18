import { App } from 'vue';
import Demo from './demo/demo.vue';

function install(app: App) {
  // const packages = [Demo];
  // packages.forEach((item:any) => {
  //   if (item.install) {
  //     app.use(item);
  //   } else if (item.name) {
  //     app.component(item.name, item);
  //   }
  // });
}
export { install, Demo};
export default { install, version:'3.1.5'};