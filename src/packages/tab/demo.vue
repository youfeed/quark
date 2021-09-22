<template>
  <div class="demo">

    <h2>基础用法</h2>
    <div class="demo-item">
      <cs-tab activekey="aaa" onchange="console.log(event)">
        <cs-tab-content label="tab1">
          《孙子兵法三十六计》是2008年万卷出版公司出版的一本图书，作者是（春秋）孙武。
        </cs-tab-content>
        <cs-tab-content label="tab2" key="aaa">
          《孙子兵法三十六计》是2008年万卷出版公司出版的一本图书，作者是（春秋）孙武。
        </cs-tab-content>
        <cs-tab-content label="tab3" disabled>
          《孙子兵法三十六计》是2008年万卷出版公司出版的一本图书，作者是（春秋）孙武。
        </cs-tab-content>
      </cs-tab>
    </div>

    <h2>横向滚动</h2>

    <div class="demo-item">
      <cs-tab>
        <cs-tab-content label="tab1">tab1</cs-tab-content>
        <cs-tab-content label="tab2">tab2</cs-tab-content>
        <cs-tab-content label="tab3">tab3</cs-tab-content>
        <cs-tab-content label="tab4">tab4</cs-tab-content>
        <cs-tab-content label="tab5">tab5</cs-tab-content>
        <cs-tab-content label="tab6">tab6</cs-tab-content>
        <cs-tab-content label="tab7">tab7</cs-tab-content>
        <cs-tab-content label="tab8">tab8</cs-tab-content>
        <cs-tab-content label="tab9">tab9</cs-tab-content>
        <cs-tab-content label="tab10">tab10</cs-tab-content>
      </cs-tab>
    </div>

    <h2>带图标 + 文字</h2>
    <div class="demo-item">
      <cs-tab>
          <cs-tab-content label="home" icon="home">tab1</cs-tab-content>
          <cs-tab-content label="message" icon="message">tab2</cs-tab-content>
          <cs-tab-content label="user" icon="user">tab3</cs-tab-content>
      </cs-tab>
    </div>

    <h2>图标</h2>
    <div class="demo-item">
      <cs-tab>
        <cs-tab-content icon="home">tab1</cs-tab-content>
        <cs-tab-content icon="message">tab2</cs-tab-content>
        <cs-tab-content icon="user">tab3</cs-tab-content>
      </cs-tab>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      
    }
  }
</script>
<style scoped>
  .demo{
    padding: 70px 0 18px !important;
  }
  .demo-item{
    margin-bottom: 40px;
  }
</style>
