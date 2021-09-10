# elf-design

Mobile UI Components built on Web Components.

## Features

- Support Vue & React

## cdn 使用

```
<script type="module" src="https://unpkg.com/xy-ui"></script>
```

## vue 项目注意

直接使用 Web Component 会告警，`Unknown custom element: <user-card> - did you register the component correctly? For recursive components, make sure to provide the "name" option.`，因此请先注册需要忽略的标签：
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

## web component 外部样式引入

```js
import styles from './range.css';
class uiRange extends HTMLElement {
    constructor () {
        super();

        let shadow = this.attachShadow({
            mode: 'open'
        });
        shadow.adoptedStyleSheets = [styles];
    }
    ...
}
if (!customElements.get('ui-range')) {
    customElements.define('ui-range', uiRange);
}
```


## License

[elf](https://github.com/allan2coder/elf) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
