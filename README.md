# Cubeshop

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

Cubeshop 是一个基于 Web Components 的跨框架 UI 组件库，输出标准的 Custom Element，组件可以同时在 React、Vue、Preact、Angular 或 原生 JS 等任意框架或无框架中使用。

我是使用者 developer ｜ [我是开发者 user](./README-dev.md)

## Features

- 支持Vue、React、Angular，技术栈无关
- 基于 Web Components.
- 简单、速度快


## 安装使用

具体安装使用方法请参考 Cubeshop 官网 https://allan2coder.github.io/cubeshop

## CDN 使用

```js
<script type="module" src="https://unpkg.com/cubeshop"></script>
// 或
<script type="module" src="https://cdn.jsdelivr.net/npm/cubeshop"></script>
```

## NPM 使用

### 📦 安装

```
npm install cubeshop // or yarn add cubeshop
```


### 🔨使用

#### 1、按需加载

babel.config.js 添加如下配置， 依赖 `babel-plugin-import` 插件
```tsx
plugins: [
  ['import', {
    libraryName: 'cubeshop',
    libraryDirectory: 'lib',
  }, 'cubeshop']
]
```

```tsx
import { CSButton, WCUse } from 'cubeshop'
WCUse(CSButton)

<cs-button type="primary">button</cs-button>
```

#### 2、全量加载
```js
import 'cubeshop';
```

## Vue/React 中使用

当作原生 dom 元素直接使用即可。

#### Vue 工程

```jsx
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

> Vue 工程中使用组件可能会出现告警 `Unknown custom element`

```html
<!-- vue2: -->
Unknown custom element: <cs-card> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
<!-- vue3 -->
[Vue warn]: Failed to resolve component: cs-icon 
```

别急，请在工程中注入如下代码即可：

```js
// VUE2.x
Vue.config.ignoredElements = [/^cs-/]

// VUE3.x
// https://v3.cn.vuejs.org/guide/migration/global-api.html#config-productiontip-%E7%A7%BB%E9%99%A4
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('cs-')
```

如果您使用的是 vite，修改 vite.config.js:

```js
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
