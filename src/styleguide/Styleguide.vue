<template>
  <div :class="config.cssNamespace + 'view-container'">
    <router-view></router-view>
  </div>
</template>

<script>
  import config from './styleguide.config';

  export default {
    name: 'view-styleguide',
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
