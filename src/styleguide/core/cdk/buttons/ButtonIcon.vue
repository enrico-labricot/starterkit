<template>
  <button :class="config.cssNamespace + 'btn-icon'">
    <slot name="before"></slot>
    <component-icon v-bind:name="icon"></component-icon>
    <slot></slot>
  </button>
</template>

<script>
  import config from '../../../styleguide.config';
  import ComponentIcon from "../medias/Icon.vue";

  export default {
    components: {
      ComponentIcon
    },
    props: ['icon'],
    name: 'component-button-icon',
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
