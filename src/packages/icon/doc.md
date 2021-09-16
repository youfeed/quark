# Icon 图标

### 介绍

基于 [IconFont](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=9402) 字体的图标集，可以通过 Icon 组件使用。一共有 **599** 个图标可供使用。

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<cs-icon size="20" name="heart"></cs-icon>
<cs-icon size="20" name="location"></cs-icon>
<cs-icon size="20" name="user"></cs-icon>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<cs-icon size="18" name="location"></cs-icon>
<cs-icon size="24" name="location"></cs-icon>
<cs-icon size="30" name="location"></cs-icon>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<cs-icon size="40" name="heart" color="orangered"></cs-icon>
<cs-icon size="40" name="heart" color="#1E90FF"></cs-icon>
<cs-icon size="40" name="location" color="#F44336"></cs-icon>
<cs-icon size="40" name="user" color="#3F51B5"></cs-icon>
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

