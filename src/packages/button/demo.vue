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

    <h2>块级元素</h2>
    <div class="demo-buttons">
      <cs-button type="primary" block>块极元素</cs-button>
      <cs-button type="info" block>块极元素</cs-button>
    </div>
    
    <h2>禁用状态</h2>
    <div class="demo-buttons">
      <cs-button disabled type="primary">disabled</cs-button>
      <cs-button disabled type="info">disabled</cs-button>
    </div>

    <h2>加载状态</h2>
    <div class="demo-buttons">
      <cs-button loading type="info"></cs-button>
      <cs-button loading type="warning">加载中...</cs-button>
    </div>

    <h2>图标按钮</h2>
    <div class="demo-buttons">
      <cs-button type="primary" icon="like">喜欢</cs-button>
      <cs-button type="info" icon="user">张三</cs-button>
    </div>

    <h2>自定义颜色</h2>
    <div class="demo-buttons">
      <cs-button style="color: #fff" color="#7232dd">单色按钮</cs-button>
      <cs-button style="color: #fff" color="linear-gradient(135deg,#fa2c19 0%,#fa6419 100%);">
        渐变色按钮
      </cs-button>
    </div>

    <h2>跳转 href</h2>
    <div class="demo-buttons">
      <cs-button href="https://baidu.com" type="primary">设置href跳转</cs-button>
    </div>
    
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
  .demo-buttons{
    margin-bottom: 24px;
  }

</style>
