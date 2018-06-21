<template>
  <!-- encapsulation is required -->
  <layout-default class="view-test"></layout-default>
</template>

<script>
  import config from '../../webapp.config';
  import LayoutDefault from "../../common/03_layouts/LayoutDefault.vue";

  export default {
    name: 'view-layout-default',
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

<style>
  /* scoped styles or not... */
</style>
