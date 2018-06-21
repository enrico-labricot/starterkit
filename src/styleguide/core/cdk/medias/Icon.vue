<template>
  <svg :class="config.cssNamespace + 'icon'">
    <use v-bind:href="config.pathSpriteIcons + '#' + name"></use>
  </svg>
</template>

<script>
  import config from '../../../styleguide.config';

  export default {
    name: 'component-icon',
    props: ['name'],
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
