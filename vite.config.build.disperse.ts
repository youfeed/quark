import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2021 @allan2coder.
* Released under the MIT License.
*/`;

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/packages/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    }
  },
  plugins: [vue()],
  build: {
    minify: false,
    lib: {
      entry: './src/packages/button/index.vue',
      name: 'index'
      // formats: ['umd']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      input: ['./src/packages/button/index.vue'],
      output: [
        {
          dir: null,
          file: './dist/lib/button/index.js',
          banner,
          format: 'umd',
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        },
        {
          dir: null,
          file: path.resolve(__dirname, './dist/es/button/index.js'),
          banner,
          format: 'es'
        }
      ]
    },
    emptyOutDir: true
  }
});
