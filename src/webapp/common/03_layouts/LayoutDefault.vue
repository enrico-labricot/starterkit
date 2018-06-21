<template>
  <!-- encapsulation is required -->
  <div :class="config.cssNamespace + 'layout-default'">
    <module-navigation></module-navigation>
    <module-header></module-header>

    <main>
      <slot name="main"></slot>
    </main>

    <slot name="footer"></slot>

    <slot name="aside"></slot>

    <slot name="aside-flap"></slot>
  </div><!--/.layout-default -->
</template>

<script>
  import config from '../../webapp.config';
  import ModuleNavigation from '../02_modules/navigation/Navigation.vue';
  import ModuleHeader from '../02_modules/header/Header.vue';

  export default {
    name: 'layout-default',
    components: {
      ModuleNavigation,
      ModuleHeader
    },
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
