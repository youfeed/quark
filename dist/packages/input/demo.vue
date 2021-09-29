<template>
  <div class="demo">

    <h2>基本用法</h2>
    <div class="demo-inputs">
      <cs-input placeholder="请输入..."></cs-input>
      <cs-input disabled placeholder="请输入..."></cs-input>
    </div>


    <!-- <cs-input placeholder="user" defaultvalue="222"></cs-input> -->

    <p>label</p>
    <!-- <cs-input label="user" defaultvalue="test"></cs-input> -->
    <!-- <cs-input label="user" defaultvalue="xboxyan"></cs-input> -->

    <!-- <cs-input label="location"></cs-input> -->
    <!-- <p>icon</p> -->
    <!-- <cs-input icon="user"></cs-input> -->
    <!-- <cs-input icon="location" onchange="console.log(event)"></cs-input> -->
    <!-- <p>block</p> -->
    <!-- <cs-input label="info" block></cs-input> -->
    <!-- <p>disabled</p> -->
    <!-- <cs-input icon="lock" type="password" disabled></cs-input> -->
    <!-- <p>type[password]</p> -->
    <!-- <cs-input icon="lock" type="password"></cs-input> -->
    <!-- <p>type[search]</p> -->
    <!-- <cs-input type="search" onsubmit="console.log(event)"></cs-input> -->
    <!-- <p>type[number]</p> -->
    <!-- <cs-input icon="creditcard" type="number" ></cs-input> -->
    <!-- <cs-input icon="creditcard" type="number" min="-10" max="10" step="0.3" ></cs-input> -->
    <!-- <p>validity</p> -->
    <!-- <cs-input icon="creditcard" required placeholder="required"></cs-input> -->
    <!-- <cs-input icon="user" required placeholder="minlength,maxlength" minlength="6" maxlength="10"></cs-input> -->
    <!-- <cs-input icon="mail" type="email" placeholder="email" minlength="5" errordir="right"></cs-input> -->
    <!-- <cs-input icon="phone" pattern="^1(3|4|5|6|7|8|9)\d{9}$" placeholder="pattern[^1(3|4|5|6|7|8|9)\d{9}$]" errortips="请输入手机号"></cs-input> -->

  </div>
</template>

<script>
  export default {
    methods: {
      // 基础弹窗
      showDialog() {
          CsDialog({
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
        CsDialog({
          content: '支持函数调用、组件调用 2 种方式。',
          oktext: '确定按钮',
          canceltext: '取消按钮',
          onOk: () => console.log('OK clicked'),
            onCancel: () => console.log('Cancel clicked')
        });
      },
      // 标签-组件调用
      showDialog3() {
        document.getElementById('dialog2').open = true;
      },
      // TODO：无取消按钮
      showDialog4() {
        CsDialog({
          title: '这是一个标题',
          content: '支持函数调用、组件调用 2 种方式。',
        });
      },
      // TODO：无按钮
      showDialog4() {
        // CsDialog({
        //   title: '这是一个标题',
        //   content: '支持函数调用、组件调用 2 种方式。',
        // });
      },
    }
  }
</script>
<style scoped>

  .demo-inputs{
    margin-bottom: 24px;
  }

</style>
