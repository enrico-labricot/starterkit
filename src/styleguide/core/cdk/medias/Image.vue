<template>
  <svg>
    <use v-bind:href="config.pathSprite + '#' + name"></use>
  </svg>
</template>

<script>
  import config from '../../../styleguide.config';

  export default {
    name: 'component-image',
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
