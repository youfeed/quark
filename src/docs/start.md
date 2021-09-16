# 快速上手

## 预览


> 敬请期待......

<!-- > 扫描下方二维码体验，体验： -->

<!-- <img src="xx" width="200" alt="cubeshop"> -->

#### CDN 安装使用示例

> 可以通过 CDN 的方式引入， 可以在 **jsdelivr** 和 **unpkg** 等公共 CDN 上获取。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title> demo </title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 引入 js -->
    <script type="module" src="https://unpkg.com/cubeshop"></script>
    <!-- // 或
    <script type="module" src="https://cdn.jsdelivr.net/npm/cubeshop"></script> -->
  </head>
  <body>

    <cs-card
      image='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'
      name='Ray'
      email="Ray@hb.com"
    ></cs-card>
    
</html>

```

## 注意事项

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