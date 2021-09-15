<template>
  <div class="demo">
    <h2>基础用法</h2>
    
  </div>
</template>

<script lang="ts">
import icons from '@/packages/styles/font/config.json';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('icon');
export default createDemo({
  props: {},
  setup() {
    return { icons };
  }
});
</script>

<style lang="scss" scoped>
.cs-cell {
  > .csui-iconfont {
    margin-right: 10px;
  }
}
ul {
  display: flex;
  flex-wrap: wrap;
  li {
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      height: 40px;
      font-size: 12px;
      text-align: center;
    }
    .csui-iconfont {
      margin: 16px 0 16px;
    }
  }
}
</style>
