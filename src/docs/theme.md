# 主题定制

Cubeshop 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。


## 样式变量

不同于一些框架采用`less`、`sass`等预处理器， Cubeshop 采用 `CSS`[自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)（`--themeColor`）实现。

## 定制主题
```css
cs-button{
    --themeColor: #0088FF;  /** 单独设置 **/
}
:root {
    --themeColor: #0088FF;  /** 全局设置 **/
}
```