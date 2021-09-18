<template>
    <div class="demo">
      <h2>基础用法</h2>
      <nut-cell>
        <acom ></acom>
        <acom ></acom>
      </nut-cell>
    </div>
  </template>
  
  <script lang="ts">
  import { createComponent } from '../../utils/create';
  const { createDemo } = createComponent('acom');
  export default createDemo({
    props: {},
    setup() {
      return {};
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .demo{
  }
  </style>
  