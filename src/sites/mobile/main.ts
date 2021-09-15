import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Csui from '@/packages/csui.vue';
import '@/sites/assets/styles/reset.scss';
import '@/packages/utils/touchEmulator';

createApp(App)
  .use(router)
  // .use(Csui)
  .mount('#app');
