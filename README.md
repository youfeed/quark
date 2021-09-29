# Cubeshop

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

Cubeshop 是一个基于 Web Components 的跨框架 UI 组件库，输出标准的 Custom Element，组件可以同时在 React、Vue、Preact、Angular 或 原生 JS 等任意框架或无框架中使用。

我是使用者 ｜ [我是开发者](./README-dev.md)

## 🤔 Motivation

技术框架的出现，提升了开发体验以页面性能，但技术框架的不断迭代更新，为项目的维护带来诸多挑战，如：

- 视觉组件无法跨技术框架（React、Vue等）使用
- 技术框架一旦升级，视觉组件常常必须配合迭代升级

因此，我们开发了这套 UI 框架，旨在与技术框架隔离（技术栈无关），让视觉组件避免落入技术栈迭代而迭代的怪圈。

## Features

- 【标准化】w3c web 标准规范
- 【技术栈无关】组件可以同时在 React、Vue、Preact、Angular 或 原生 JS 等任意框架或无框架中使用
- 【轻量】不依赖第三方库或框架


## 📦  安装使用

具体安装使用方法请参考 Cubeshop 官网。


```shell
$ yarn add cubeshop  # or npm i cubeshop -S
```

## 🔨 全量加载
```html
import 'cubeshop';

<cs-button type="primary">按钮</cs-button>
```

## 🔨 按需加载

<br />

### Webpack

```tsx
// 1、安装
npm i babel-plugin-import

// 2、修改 babel.config.js：
plugins: [
  [
    'import', {
      libraryName: 'cubeshop',
      libraryDirectory: 'lib',
    }, 
    'cubeshop',
  ]
]


// 3、使用
import { CSButton } from 'cubeshop';

// 4、当作原生标签使用即可
<cs-button type="primary">按钮</cs-button>
```

### Vite

```tsx
// 1、安装
npm i vite-plugin-babel-import -D

// 2、修改 vite.config.js：
import vitePluginImport from 'vite-plugin-babel-import';

export default {
  plugins: [
    vitePluginImport([
      {
        libraryName: 'cubeshop',
        libraryDirectory: 'lib',
      }
    ]),
  ]
};

// 3、使用
import { CSButton } from 'cubeshop';

// 4、当作原生标签使用即可
<cs-button type="primary">按钮</cs-button>
```

#### Vue 工程

```tsx
<template>
  <div>
    <cs-button type="primary">按钮</cs-button>
  </div>
</template>
```
#### React 工程

```jsx
class Demo extends React.Component {
  render() {
    return (
      <div>
        <cs-button type="primary">按钮</cs-button>
      </div>
    );
  }
}
```

##  注意

- Vue 工程中使用组件可能会出现告警：

```html
<!-- vue2: -->
Unknown custom element: <cs-card> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
<!-- vue3 -->
[Vue warn]: Failed to resolve component: cs-icon 
```

别急，请在工程中注入如下代码即可：

```tsx
// VUE2.x
Vue.config.ignoredElements = [/^cs-/]

// VUE3.x
// https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-%E7%A7%BB%E9%99%A4
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('cs-')
```

如果您使用的是 vite，修改 vite.config.js:

```tsx
import vue from '@vitejs/plugin-vue'
export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'cs-'
        }
      }
    })
  ]
}
```

## License

[cubeshop](https://github.com/allan2coder/cubeshop) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
