<template>
  <section v-bind:class="classPanel" :data-color="color">
    <header v-if="title">
      <h1 :class="config.cssNamespace + 'panel-title'">{{ title }}</h1>
    </header>

    <div :class="config.cssNamespace + 'panel-body'">
      <slot></slot>
    </div><!--/.panel-body -->
  </section>
</template>

<script>
  import config from '../../../styleguide.config';

  export default {
    name: 'component-panel-card-label',
    props: ['title', 'color'],
    data() {
      return {
        config: config
      }
    },
    computed: {
      classPanel: function() {
        let className = [];
        className.push(this.config.cssNamespace + 'panel-card-label');

        if ( this.active ) {
          className.push(this.config.cssNamespace + this.config.states.active);
        }

        if ( this.disabled ) {
          className.push(this.config.cssNamespace + this.config.states.disabled);
        }

        return className.join(' ');
      }
    },
  }
</script>

<style>
  /* style scoped or not...  */
</style>
