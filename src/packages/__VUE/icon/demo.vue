<template>
  <div class="demo">
    <h2>基础用法</h2>
    <cs-cell>
      <cs-icon name="dongdong"></cs-icon>
      <cs-icon name="JD"></cs-icon>
    </cs-cell>
    <h2>图片链接</h2>
    <cs-cell>
      <cs-icon
        size="40"
        name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      >
      </cs-icon>
    </cs-cell>
    <h2>图标颜色</h2>
    <cs-cell>
      <cs-icon name="dongdong" color="#fa2c19"></cs-icon>
      <cs-icon name="dongdong" color="#64b578"></cs-icon>
      <cs-icon name="JD" color="#fa2c19"></cs-icon>
    </cs-cell>

    <h2>图标大小</h2>
    <cs-cell>
      <cs-icon name="dongdong"></cs-icon>
      <cs-icon name="dongdong" size="24"></cs-icon>
      <cs-icon name="dongdong" size="26"></cs-icon>
    </cs-cell>

    <cs-cell-group v-for="item in icons.data" :title="item.name">
      <cs-cell>
        <ul>
          <li v-for="item in item.icons" :key="item">
            <cs-icon :name="item"></cs-icon>
            <span>{{ item }}</span>
          </li>
        </ul>
      </cs-cell>
    </cs-cell-group>
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
