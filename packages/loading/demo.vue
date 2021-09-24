<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div class="demo-loadings">
      <cs-loading></cs-loading>
    </div>

    <h2>尺寸大小</h2>
    <div class="demo-loadings">
      <cs-loading size="20"></cs-loading>
      <cs-loading size="30"></cs-loading>
      <cs-loading size="40"></cs-loading>
    </div>

    <h2>loading 颜色</h2>
    <div class="demo-loadings">
      <cs-loading size="30"></cs-loading>
      <cs-loading size="30" color="green"></cs-loading>
      <cs-loading size="30" color="orange"></cs-loading>
    </div>

  </div>
</template>

<style scoped>
  cs-loading {
    margin-right: 6px;
  }
  .demo-loadings{
    margin-bottom: 24px;
  }
</style>
