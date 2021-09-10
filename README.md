# Elf-design

Elf-design /elf/ 是一个基于 Web Components 的 UI 组件库。它是一个不局限于框架的组件复用（可在 Angular、React、Vue 等跨技术栈使用）。


## Features

- Fast.
- Web Components.
- Simple.

## cdn 使用

```
<script type="module" src="https://unpkg.com/elfd@latest/index.js"></script>
```

## Vue 技术栈使用

当作原生 dom 元素直接使用即可。

ps：直接使用 Web Component 会告警：
```js
Unknown custom element: <user-card> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
```

因此请先注册需要忽略的标签：

```js
Vue.config.ignoredElements = [
  'user-card',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
]
```

## React 技术栈使用


同理，当作原生 dom 元素直接使用即可。


## License

[elf](https://github.com/allan2coder/elf) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
