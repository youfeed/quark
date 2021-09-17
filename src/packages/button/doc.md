# Button 按钮

### 介绍

按钮。

## 代码演示

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

```html
<cs-button type="primary">主要按钮</cs-button>
<cs-button type="info">信息按钮</cs-button>
<cs-button type="danger">危险按钮</cs-button>
<cs-button type="default">默认按钮</cs-button>
<cs-button type="warning">警告按钮</cs-button>
```

### 块级 block

通过 `block` 属性来设置块级样式。

```html
<cs-button type="primary" block>块极元素</cs-button>
<cs-button type="info" block>块极元素</cs-button>
```
### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```html
<cs-button disabled type="primary">disabled</cs-button>
<cs-button disabled type="info">disabled</cs-button>
```

### 加载状态

通过 `loading` 属性设置加载状态。

```html
<cs-button loading type="info"></cs-button>
<cs-button loading type="warning">加载中...</cs-button>
```

### 图标按钮

通过 `icon` 属性设置图标。

```html
<cs-button type="primary" icon="like">喜欢</cs-button>
<cs-button type="info" icon="user">张三</cs-button>
```

### 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```html
<cs-button style="color: #fff" color="#7232dd">单色按钮</cs-button>
<cs-button style="color: #fff" color="linear-gradient(135deg,#fa2c19 0%,#fa6419 100%);">
  渐变色按钮
</cs-button>
```

### 跳转 href

通过 `href` 属性来设置需要跳转的链接，当作 `a` 标签使用。

```html
<cs-button href="https://baidu.com" type="primary">设置href跳转</cs-button>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 类型，可选值为 `primary` `info` `warning` `danger` `success` | String |`default`         |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色     | String | - |
| disabled          | 	是否禁用按钮                       | Boolean | `false`              |
| block          | 是否为块级元素                        | Boolean | `false`               |
| icon          | 按钮图标，同Icon组件name属性                        | String | -     |
| loading          | 按钮loading状态                        | Boolean | `false`               |
| href          | 设置跳转链接                        | String | - |
