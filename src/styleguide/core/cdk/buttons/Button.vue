<template>
  <button v-bind:class="classBtn" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
  import config from '../../../styleguide.config';

  export default {
    name: 'component-button',
    props: ['css', 'active', 'disabled'],
    data() {
      return {
        config: config
      }
    },
    computed: {
      classBtn: function() {
        let className = [];

        if ( this.css ) {
          className.push(this.config.cssNamespace + this.css);
        }

        if ( this.active) {
          className.push(this.config.cssNamespace + this.config.states.active);
        }

        return className.join(' ');
      }
    }
  }
</script>

<style>
  /* style scoped or not...  */
</style>
