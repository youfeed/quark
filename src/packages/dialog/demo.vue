<template>
  <div class="demo">

    <h2>函数式调用</h2>
    <div class="demo-buttons">
      <cs-button type="primary" @click="showDialog()">基础弹窗</cs-button>
      <cs-button type="primary" @click="showDialog2()">无标题弹窗</cs-button>
    </div>

    <h2>标签式调用</h2>
    <div class="demo-buttons">
      <cs-button @click="showDialog3()">组件调用</cs-button>
    </div>

    <h2>底部按钮类型</h2>
    <div class="demo-buttons">
      <cs-button @click="showDialog3()">无取消按钮</cs-button>
    </div>

    <cs-dialog id="dialog2" title="This is a title" oktext="确定" canceltext="取消">
      支持函数调用、组件调用 2 种方式。
    </cs-dialog>
  </div>
</template>

<script>
  export default {
    methods: {
      showDialog() {
          CsDialog({
            title: '这是一个标题',
            content: '支持函数调用、组件调用 2 种方式。',
            oktext: '确定按钮',
            okcancel: '取消按钮',
            onOk: () => console.log('OK clicked'),
            onCancel: () => console.log('Cancel clicked')
          });
      },
      showDialog2() {
          CsDialog({
            // title: '这是一个标题',
            content: '支持函数调用、组件调用 2 种方式。',
            oktext: '确定按钮',
            okcancel: '取消按钮',
            onOk: () => console.log('OK clicked'),
            onCancel: () => console.log('Cancel clicked')
          });
      },
      showDialog3() {
          CsDialog({
            title: '这是一个标题',
            content: '支持函数调用、组件调用 2 种方式。',
            oktext: '确定按钮',
            // okcancel: '取消按钮',
            onOk: () => console.log('OK clicked'),
            // onCancel: () => console.log('Cancel clicked')
          });
      },
    }
  }
</script>
<style scoped>
  cs-button{
    margin-right: 6px;
    margin-top: 6px;
  }
  .demo-buttons{
    margin-bottom: 24px;
  }

</style>
