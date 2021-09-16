# 快速上手

## 预览


> 扫描下方二维码体验，体验：

<img src="xx" width="200" alt="cubeshop">

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
    <script type="module" src="../src/index.js"></script>
  </head>
  <body>

    <user-card
      image='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'
      name='Ray'
      email="Ray@hb.com"
    ></user-card>
    
</html>

```

## 注意事项

- Vue 中直接使用组件会告警：
```html
Unknown custom element: <user-card> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
```

注册需要忽略的标签：

```
Vue.config.ignoredElements = [
  'user-card',
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^ion-/
]
```

- 组件 css 单位使用的是 **px**，如果你的项目中需要 **rem** 单位，可借助一些工具进行转换，比如 [webpack](https://www.webpackjs.com/) 的 [px2rem-loader](https://www.npmjs.com/package/px2rem-loader)、[postcss](https://github.com/postcss/postcss) 的 [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem) 插件等
