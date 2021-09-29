# Dialog 弹窗

### 介绍

用于组织信息和操作，通常也作为详细信息的入口。

## 代码演示

### 函数式调用

```html
<cs-button type="primary" @click="showDialog()">基础弹窗</cs-button>
<cs-button type="primary" @click="showDialog2()">无标题弹窗</cs-button>

<script>
import Dialog from './index.js'
export default {
    methods: {
        // 基础弹窗
        showDialog() {
            Dialog({
                title: '这是一个标题',
                content: '支持函数调用、组件调用 2 种方式。',
                oktext: '确定按钮',
                canceltext: '取消按钮',
                onOk: () => console.log('OK clicked'),
                onCancel: () => console.log('Cancel clicked')
            });
        },
        // 无标题弹窗
        showDialog2() {
            Dialog({
                content: '支持函数调用、组件调用 2 种方式。',
                oktext: '确定按钮',
                canceltext: '取消按钮',
                onOk: () => console.log('OK clicked'),
                onCancel: () => console.log('Cancel clicked')
            });
        },
    }
}
</script>
```

### 标签式调用

```html
<cs-button @click="showDialog3()">组件调用</cs-button>

<script>
export default {
    methods: {
        showDialog3() {
            document.getElementById('dialog2').open = true;
        },
    }
}
</script>
```


### 底部按钮展示

```html
// TODO
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| title        | 标题 | String                     | 
| content      | 内容 | String                     |
| oktext      | 确定按钮 | String                   |
| canceltext      | 取消按钮 | String               |
| open         | 弹窗状态 | Boolean                |      false       |



### Event

| 名称         | 说明                             | 回调参数   |
|--------------|----------------------------------|--------|
| onOk         | 确定回调函数                       |          |
| onCancel     | 取消回调函数                       |          |