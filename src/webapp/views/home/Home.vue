<template>
  <!-- encapsulation is required -->
  <layout-default>
    <div slot="main">
      <h1>Home page</h1>
      <p>Hello world...</p>
    </div>
  </layout-default>
</template>

<script>
  import config from '../../webapp.config';
  import LayoutDefault from "../../common/03_layouts/LayoutDefault.vue";

  export default {
    name: 'view-home',
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
  main > div {
    padding: 1.6rem;
  }

  ul {
    margin-bottom: 1.6rem;
  }
</style>
