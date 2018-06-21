<template>
  <!-- encapsulation is required -->
  <layout-default>
    <main slot="main"></main>

    <aside :class="config.cssNamespace + 'aside'" slot="aside">
      <header>
        <h1>Aside header</h1>
      </header>
      <div :class="config.cssNamespace + 'body'"></div>
    </aside>
  </layout-default>
</template>

<script>
  import config from '../../webapp.config';
  import LayoutDefault from "../../common/03_layouts/LayoutDefault.vue";

  export default {
    name: 'view-layout-aside',
    components: {
      LayoutDefault
    },
    data() {
      return {
        config: config
      }
    }
  }
</script>

<style scoped>
  /* style scoped or not...  */
</style>
