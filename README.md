# Cubeshop

Cubeshop 是一个基于 Web Components 的 UI 组件库。它是一个不局限于框架的组件复用（可在 Angular、React、Vue 等跨技术栈使用）。

![image](https://miro.medium.com/max/2000/1*-zkpV1IfOv-1dux6ZqWBCQ.png)
Image from [codeburst](https://codeburst.io/building-efficient-components-6ee2bdaea542) by [@webrealizer](https://twitter.com/webrealizer)

## Features

- Fast.
- Web Components.
- Simple.

## cdn 使用

```js
<script type="module" src="https://unpkg.com/cubeshop"></script>
// 或
<script type="module" src="https://cdn.jsdelivr.net/npm/cubeshop"></script>
```

## npm 使用

敬请期待......

## Vue/React 中使用

当作原生 dom 元素直接使用即可，如：

```vue
<template>
  <div>
    <cs-button type="primary">按钮</cs-button>
  </div>
</template>
```

##  注意

在 Vue 项目中，您可能会遇到 `Unknown custom element` 告警：

```js
Unknown custom element: <cs-card> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
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

## License

[cubeshop](https://github.com/allan2coder/cubeshop) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
