<template>
  <div class="demo">
    <h2>按钮类型</h2>
    <div class="item-wrap">
      <cs-steps direction="vertical">
        <cs-step status="done" title="已完成" content="内容">1</cs-step>
        <cs-step status="doing" title="已完成" content="内容">1</cs-step>
        <cs-step status="todo" title="已完成" content="内容">1</cs-step>
      </cs-steps>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.item-wrap{
    /* height: 300px; */
    padding: 16px;
    background: #fff;
}


</style>
