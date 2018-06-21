<template>
  <div :class="config.cssNamespace + 'view-container'">
    <router-view></router-view>
  </div>
</template>

<script>
  import config from './webapp.config';

  export default {
    name: 'view-webapp',
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
