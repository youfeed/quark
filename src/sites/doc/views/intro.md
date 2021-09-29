
## 📦 安装

```shell
$ yarn add cubeshop  # or npm i cubeshop -S
```

## 🔨 使用

#### 按需加载
babel.config.js 添加如下配置， 依赖 babel-plugin-import 插件

```tsx
plugins: [
  ['import', {
    libraryName: 'cubeshop',
    libraryDirectory: 'lib',
  }, 'cubeshop']
]

```
```tsx
import { CSButton, WCUse } from 'cubeshop';
WCUse(CSButton); // 待优化，这行计划后面版本删除

<cs-button type="primary">按钮</cs-button>
```


参考：[快速上手](/#/start)。