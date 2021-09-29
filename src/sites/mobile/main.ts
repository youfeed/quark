// mobile ui 在 web 端可视化展示
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/sites/assets/styles/reset.scss';
import '@/utils/touchEmulator';

createApp(App)
  .use(router)
  .mount('#app');
