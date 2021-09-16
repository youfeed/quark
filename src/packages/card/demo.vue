<template>
  <div class="demo">

    <user-card
      image='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'
      name='Ray'
      email="Ray@hb.com"
    ></user-card>

  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('button');
export default createDemo({
  props: {},
  setup(props) {
    let isLoading = ref(false);
    const changeLoading = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 3000);
    };

    return {
      isLoading,
      changeLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.cs-button {
  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
}
</style>
