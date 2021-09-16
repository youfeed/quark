<template>
  <div class="demo">
    <h2>按钮类型</h2>
    <div class="demo-buttons">
      <cs-button type="primary">主要按钮</cs-button>
      <cs-button type="info">信息按钮</cs-button>
      <cs-button type="danger">危险按钮</cs-button>
      <cs-button type="default">默认按钮</cs-button>
      <cs-button type="success">成功按钮</cs-button>
      <cs-button type="warning">警告按钮</cs-button>
    </div>

    <h2>禁用状态</h2>
    <cs-button disabled type="primary">禁用状态</cs-button>
    <cs-button plain disabled type="info">禁用状态</cs-button>
    <cs-button plain disabled type="primary">禁用状态</cs-button>
  </div>
</template>

<style scoped>
  cs-button{
    margin-right: 6px;
    margin-top: 6px;
  }
  .demo-buttons{
    display: grid;
  }
</style>
