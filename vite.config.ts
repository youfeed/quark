import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import Markdown from 'vite-plugin-md';
import path from 'path';
import config from './package.json';
const hljs = require('highlight.js'); // https://highlightjs.org/
const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: '/1x/',
  server: {
    port: 2021,
    proxy: {
      '/devServer': {
        target: 'https://csui.jd.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/devServer/, '')
      }
    }
  },
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
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
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('cs-')
        }
      }
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ''; // 使用额外的默认转义
        }
      }
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    target: 'es2015',
    outDir: './dist/3x/',
    assetsDir: config.version,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'demo.html')
      }
    }
  }
});
