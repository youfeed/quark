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

- Vue 工程中使用组件可能会出现告警：

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

## Examples

为方便演示，直接使用 cdn 加载，工程类项目同样使用。

### Vue 工程使用
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title> Vue demo </title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="module" src="https://unpkg.com/cubeshop"></script>
    <!-- vue cdn 引入 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  </head>
  <body>
    <h1>这是一个 Vue 工程!</h1>
    <div id="app">
      <cs-card
        v-for="item in items"
        @click="handleClick(item)"
        :image='item.image'
        :name='item.name'
        :email="item.email"
      ></cs-card>
    </div>
  </body>
  <script>
    // 忽略 vue 中自定义标签会告警
    Vue.config.ignoredElements = [
      'user-card',
    ]
    var vm = new Vue({
      el: '#app',
      data: {
        items: [{
          image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
          name: 'Allan',
          email: 'Allan@hb.com',
        },{
          image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
          name: 'stark',
          email: 'stark@hb.com',
        },{
          image: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
          name: 'Ray',
          email: 'Ray@hb.com',
        }],
        msg: 'test'
      },
      methods: {
        handleClick(item){
          alert(item);
        }
      }
    })
  </script>
</html>
```
### React 工程使用
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title> React demo </title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script type="module" src="https://unpkg.com/cubeshop"></script>
    <!-- React cdn -->
    <script src="https://cdn.bootcdn.net/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
    <!--  Babel 可以将 ES6 代码转为 ES5 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
  </head>
  <body>
    <h1>这是一个 React 工程!</h1>
    <div id="app"></div>
  </body>
  <script type="text/babel">
    class App extends React.Component {
      render() {
        return (
          <div>
            <cs-card
              image='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'
              name='Ray'
              email="Ray@hb.com"
            ></cs-card>
          </div>
        );
      }
    }
    ReactDOM.render(<App/>, document.getElementById('app'));
  </script>
</html>
```


## License

[cubeshop](https://github.com/allan2coder/cubeshop) is released
under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
