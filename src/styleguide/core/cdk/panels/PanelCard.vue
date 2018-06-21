<template>
  <section v-bind:class="classPanel" :data-color="color">
    <slot name="header"></slot>

    <slot name="body"></slot>

    <slot name="footer"></slot>
  </section>
</template>

<script>
  import config from '../../../styleguide.config';
  import ComponentButtonIcon from "../buttons/ButtonIcon.vue";

  export default {
    components: {
      ComponentButtonIcon
    },
    name: 'component-panel-card',
    props: ['title', 'color', 'type', 'active', 'inactive', 'enabled', 'disabled', 'pinned'],
    data() {
      return {
        config: config
      }
    },
    computed: {
      classPanel: function() {

        let className = [];
        let baseClass = this.config.cssNamespace + 'panel-card';

        if ( this.type ) {
          baseClass += '-' + this.type;
        }
        className.push(baseClass);

        // states
        if ( this.active) {
          className.push(this.config.cssNamespace + this.config.states.active);
        }

        if ( this.inactive ) {
          className.push(this.config.cssNamespace + this.config.states.inactive);
        }

        if ( this.enabled ) {
          className.push(this.config.cssNamespace + this.config.states.enabled);
        }

        if ( this.disabled ) {
          className.push(this.config.cssNamespace + this.config.states.disabled);
        }

        return className.join(' ');
      },
      iconPin: function() {
        return (this.pinned === "on") ? this.config.icons.pin.on : this.config.icons.pin.off;
      }
    },
    methods: {
      toggleSelect: function (event) {
        if (!this.disabled) {
          switch(this.type) {
            case 'fill':
              this.$el.classList.toggle(this.config.cssNamespace + this.config.states.enabled);
              //window.location.href = '/board-day#'+this.$el.id;
              break;
            default:
              this.$el.classList.toggle(this.config.cssNamespace + this.config.states.active);
              break;
          }
        }
      }
    }
  }
</script>

<style>
  /* style scoped or not...  */
</style>
