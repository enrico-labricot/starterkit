<template>
  <ul :class="config.cssNamespace + 'list-group'">
    <slot></slot>
  </ul>
</template>

<script>
  import config from '../../../styleguide.config';

  export default {
    name: 'component-list-group',
    data() {
      return {
        config: config
      }
    }
  }
</script>

<style>
  /* style scoped or not...  */
</style>
