<template>
  <div class="demo">
    <h2>基础用法</h2>
    <section class="demo-cell">
      <cs-icon size="26" name="heart"></cs-icon>
      <cs-icon size="26" name="location"></cs-icon>
      <cs-icon size="26" name="user"></cs-icon>
    </section>

    <h2>图标大小</h2>
    <section class="demo-cell">
      <cs-icon size="18" name="location"></cs-icon>
      <cs-icon size="24" name="location"></cs-icon>
      <cs-icon size="30" name="location"></cs-icon>
    </section>

    <h2>图标颜色</h2>
    <section class="demo-cell">
      <cs-icon size="26" name="smile" color="red"></cs-icon>
      <cs-icon size="26" name="heart" color="#1E90FF"></cs-icon>
      <cs-icon size="26" name="location" color="#F44336"></cs-icon>
      <cs-icon size="26" name="user" color="#3F51B5"></cs-icon>
    </section>
  </div>
</template>
<style>
  .demo-cell{
    position: relative;
    display: flex;
    width: 100%;
    line-height: 20px;
    padding: 13px 16px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 7px #edeef1;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    box-sizing: border-box;
  }
  cs-icon{
    margin-right: 6px;
  }
</style>