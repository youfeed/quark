# 加载 Loading 

### 介绍

加载 loading。

## 代码演示

### 基础用法

添加loading属性即可让按钮处于加载状态，处于加载状态所有事件会被禁用，类似于disabled：

```html
<cs-button type="primary" loading>loading</cs-button>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<cs-icon name="dongdong" color="#fa2c19"></cs-icon>
<cs-icon name="dongdong" color="#64b578"></cs-icon>
<cs-icon name="JD" color="#fa2c19"></cs-icon>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<cs-icon name="dongdong"></cs-icon>
<cs-icon name="dongdong" size="24"></cs-icon>
<cs-icon name="dongdong" size="16"></cs-icon>
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

> 方案一 引入 [iconfont](https://www.iconfont.cn/)   推荐此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目  [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

``` bash
/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
```

第二步：项目入口文件 main.js 引用 `iconfont.css`


``` javascript
import './assets/font/iconfont.css';
```

第三步：

```html
<!-- 
  font-class-name 指定类名为默认 iconfont
  class-prefix 指定默认 icon
  name 值根据 iconfont.css 中值对应填写 
-->
<cs-icon font-class-name="iconfont" class-prefix="icon" name="close" />
```



> 方案二 第三方自定义字体库

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 
  font-class-name 指定类名为默认 my-icon
  class-prefix 指定默认 my-icon
-->
<cs-icon font-class-name="my-icon" class-prefix="my-icon" name="extra" />

```

## API

### Props

| 参数         | 说明                             | 类型             | 默认值           |
|--------------|----------------------------------|------------------|------------------|
| name         | 图标名称或图片链接               | String           | -                |
| color        | 图标颜色                         | String           | -                |
| size         | 图标大小，如 `20px` `2em` `2rem` | String or Number | -                |
| font-class-name | 字体基础类名     | String           | `csui-iconfont` |
| class-prefix | 类名前缀，用于使用自定义图标     | String           | `cs-icon` |
| tag          | HTML 标签                        | String           | `i`              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |

