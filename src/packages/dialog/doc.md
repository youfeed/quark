# Dialog 弹窗

### 介绍

用于组织信息和操作，通常也作为详细信息的入口。

## 代码演示

### 弹窗类型

```html
<cs-button type="primary" onclick="showDialog()">open dialog</cs-button>
<cs-button onclick="XyDialog.alert('alert')">alert</cs-button>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title        | 标题 | String                     |
| content      | 内容 | String                     |
| cash         | 金额 | String                     |             |
| status       | 状态 | String/Number              | - |


