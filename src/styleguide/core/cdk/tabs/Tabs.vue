<template>
  <div :class="config.cssNamespace + 'tabs'">
    <ul :class="config.cssNamespace + 'tabs-nav'">
      <!-- @todo: v-for for nav links -->
      <li>Onglet 1</li>
      <li>Onglet 2</li>
    </ul>

    <div :class="config.cssNamespace + 'tabs-body'">
      <slot></slot>
    </div><!--/.tab-content -->
  </div><!--/.tabs -->
</template>

<script>
  import config from '../../../styleguide.config';

  export default {
    name: 'component-tabs',
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
