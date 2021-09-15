<template>
  <div class="demo">
    <h2>按钮类型</h2>

    <cs-button type="primary">primary</cs-button>
    <cs-button type="dashed">dashed</cs-button>
    <cs-button type="flat">flat</cs-button>
    <cs-button type="danger">danger</cs-button>
    <cs-button>default</cs-button>

    <!-- <div class="demo-button-row">
      <cs-button type="primary">主要按钮</cs-button>
      <cs-button type="info">信息按钮</cs-button>
      <cs-button type="default">默认按钮</cs-button>
    </div> -->
    <!-- <div class="demo-button-row2">
      <cs-button type="danger">危险按钮</cs-button>
      <cs-button type="warning">警告按钮</cs-button>
      <cs-button type="success">成功按钮</cs-button>
    </div>
    <h2>朴素按钮</h2>
    <div class="demo-button-row2">
      <cs-button plain type="primary">朴素按钮</cs-button>
      <cs-button plain type="info">朴素按钮</cs-button>
    </div>
    <h2>禁用状态</h2>
    <div class="demo-button-row2">
      <cs-button disabled type="primary">禁用状态</cs-button>
      <cs-button plain disabled type="info">禁用状态</cs-button>
      <cs-button plain disabled type="primary">禁用状态</cs-button>
    </div>
    <h2>按钮形状</h2>
    <div class="demo-button-row2">
      <cs-button shape="square" type="primary">方形按钮</cs-button>
      <cs-button type="info">圆形按钮</cs-button>
    </div>
    <h2>加载状态</h2>
    <div class="demo-button-row2">
      <cs-button loading type="info"></cs-button>
      <cs-button loading type="warning">加载中...</cs-button>
      <cs-button :loading="isLoading" type="success" @click="changeLoading"
        >Click me!</cs-button
      >
    </div>
    <h2>图标按钮</h2>
    <div class="demo-button-row2">
      <cs-button
        shape="square"
        plain
        type="primary"
        icon="star-fill"
      ></cs-button>
      <cs-button shape="square" type="primary" icon="star">收藏</cs-button>
    </div>

    <h2>按钮尺寸</h2>
    <div class="demo-button-row2">
      <cs-button size="large" type="primary" style="margin-bottom: 10px"
        >大号按钮</cs-button
      >
      <cs-button type="primary">普通按钮</cs-button>
      <cs-button size="small" type="primary">小型按钮</cs-button>
    </div>
    <h2>块级元素</h2>
    <div class="demo-button-row2">
      <cs-button block type="primary">块级元素</cs-button>
    </div>
    <h2>自定义颜色</h2>
    <div class="demo-button-row2">
      <cs-button color="#7232dd">单色按钮</cs-button>
      <cs-button color="#7232dd" plain>单色按钮</cs-button>
      <cs-button color="linear-gradient(to right, #ff6034, #ee0a24)">
        渐变按钮
      </cs-button>
    </div> -->
  </div>
</template>

<script lang="ts">
// import { ref } from 'vue';
// import { createComponent } from '../../utils/create';
// const { createDemo } = createComponent('button');
// export default createDemo({
//   props: {},
//   setup(props) {
//     let isLoading = ref(false);
//     const changeLoading = () => {
//       isLoading.value = true;
//       setTimeout(() => {
//         isLoading.value = false;
//       }, 3000);
//     };

//     return {
//       isLoading,
//       changeLoading
//     };
//   }
// });
</script>

<style lang="scss" scoped>
// .demo-button-row {
//   margin-bottom: 20px;
// }
// .demo-button-row2 {
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
// }
// .cs-button {
//   margin-right: 15px;
//   &:last-child {
//     margin-bottom: 0;
//     margin-right: 0;
//   }
// }
</style>
