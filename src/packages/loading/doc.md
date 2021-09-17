# 加载动画 Loading

### 介绍

加载 loading。

## 代码演示

### 基础用法

```html
<cs-loading></cs-loading>
```

### loading 颜色

通过 `color` 属性用来设置 `loading` 的颜色。

```html
<cs-loading size="30"></cs-loading> // 默认颜色
<cs-loading size="30" color="green"></cs-loading>
<cs-loading size="30" color="orange"></cs-loading>
```

### 尺寸大小

通过 `size` 属性用来设置 `loading` 的尺寸大小，默认单位为 `px`。

```html
<cs-loading size="20"></cs-loading>
<cs-loading size="30"></cs-loading>
<cs-loading size="40"></cs-loading>
```

## API

### Props

| 参数         | 说明                             | 类型             | 默认值           |
|--------------|----------------------------------|------------------|------------------|
| color        | 图标颜色                         | String           | -                |
| size         | 图标大小，如 `20px` `2em` `2rem` | String or Number | -                |
