<template>
  <div class="demo">

    <h2>按钮类型</h2>
    <div class="demo-buttons">
      <cs-button type="primary">主要按钮</cs-button>
      <cs-button type="info">信息按钮</cs-button>
      <cs-button type="danger">危险按钮</cs-button>
      <cs-button type="default">默认按钮</cs-button>
      <cs-button type="warning">警告按钮</cs-button>
    </div>

    <h2>禁用状态</h2>
    <cs-button disabled type="primary">disabled</cs-button>
    <cs-button disabled type="info">disabled</cs-button>
    <cs-button disabled type="primary">disabled</cs-button>

    <h2>加载状态</h2>
    <cs-button loading type="info"></cs-button>
    <cs-button loading type="warning">加载中...</cs-button>

    <h2>按钮 + icon</h2>
    <cs-button type="primary" icon="like">喜欢</cs-button>


  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  cs-button{
    margin-right: 6px;
    margin-top: 6px;
  }
</style>
