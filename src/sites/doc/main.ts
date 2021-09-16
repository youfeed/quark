import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/sites/assets/styles/md-style.scss';
import DemoBlock from './components/demo-block';
import { Hover } from './directive/hover/hover';

import { isMobile } from '@/sites/assets/util';

// 移动端，仅展示 h5 页面，使用 demo.html
if (isMobile) {
  location.replace('demo.html' + location.hash);
}

createApp(App)
  .directive('hover', Hover)
  .component('demo-block', DemoBlock)
  .use(router)
  .mount('#doc');
