<template>
  <header :class="config.cssNamespace + 'header-main'">

    <div :class="config.cssNamespace + 'wrapper-nav'">
      <button :class="config.cssNamespace + 'wrapper-logo'" data-target="nav-main" v-on:click="toggleNav">
        <component-icon name="icon-bars-h"></component-icon>
        <span>Menu</span>
      </button>
    </div><!--/.nav-wrapper -->

    <slot></slot>
  </header>
</template>

<script>
  import config from '../../../webapp.config';
  import ComponentImage from "../../../../styleguide/core/cdk/medias/Image.vue";
  import ComponentIcon from "../../../../styleguide/core/cdk/medias/Icon.vue";

  export default {
    components: {
      ComponentImage,
      ComponentIcon
    },
    name: 'module-header',
    data() {
      return {
        config: config
      }
    },
    methods: {
      toggleNav: function (event) {
        document.getElementById(event.currentTarget.dataset.target).classList.toggle(this.config.cssNamespace + this.config.states.opened);
      }
    }
  }
</script>

<style>
  /* style scoped or not...  */
</style>
