<template>
  <div>
    
    <doc-header></doc-header>
    
    <doc-nav></doc-nav>

    <div class="doc-content">
      <div class="doc-content-document">
        <!-- web content from md files -->
        <router-view />
      </div>
      
      <doc-demo-preview :url="demoUrl"></doc-demo-preview>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRoute,
  useRouter
} from 'vue-router';

import Header from '@/sites/doc/components/Header.vue';
import Nav from '@/sites/doc/components/Nav.vue';

// mobile simulate
import DemoPreview from '@/sites/doc/components/DemoPreview.vue';
import { RefData } from '@/sites/assets/util/ref';

export default defineComponent({
  name: 'doc',
  components: {
    [Header.name]: Header,
    [Nav.name]: Nav,
    [DemoPreview.name]: DemoPreview
  },
  setup() {
    const route = useRoute();

    const data = reactive({
      demoUrl: 'demo.html',
    });

    const watchDemoUrl = (router: RouteLocationNormalized) => {
      const { origin, pathname } = window.location;
      RefData.getInstance().currentRoute.value = router.name as string;
      data.demoUrl = `${origin}${pathname.replace('index.html', '')}demo.html#${
        router.path
      }`;
    };

    onMounted(() => {
      watchDemoUrl(route);
    });

    onBeforeRouteUpdate((to) => {
      watchDemoUrl(to);
    });

    return {
      ...toRefs(data),
    };
  }
});
</script>

<style lang="scss" scoped>
.doc {
  &-content {
    margin-left: 290px;
    display: flex;
    flex-direction: column;

    &-document {
      min-height: 800px;
    }
  }
}
</style>
