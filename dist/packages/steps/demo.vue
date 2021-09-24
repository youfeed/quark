<template>
  <div class="demo">
    <h2>按钮类型</h2>
    <div class="cs-steps-wrapper">
      <cs-step status="done" title="已完成" content="内容">1</cs-step>
      <cs-step status="doing" title="已完成" content="内容">1</cs-step>
      <cs-step status="todo" title="已完成" content="内容">1</cs-step>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.cs-steps-wrapper{
    height: 300px;
    padding: 15px 30px;
}
cs-step:last-child .cs-step-line {
  display: none;
}
</style>
