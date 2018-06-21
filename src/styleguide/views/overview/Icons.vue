<template>
  <!-- encapsulation is required -->
  <layout-default>
    <div slot="main">
      <ul :class="config.cssNamespace + 'list'">
        <li v-for="(icon, index) in data.icons" :key="index">
          <component-icon :name="icon"></component-icon>
          <span>{{icon}}</span>
        </li>
      </ul>
    </div>
  </layout-default>
</template>

<script>
  import LayoutDefault from "../../../webapp/common/03_layouts/LayoutDefault.vue"; // temp => create a styleguide layout
  import config from '../../styleguide.config';
  import jsonData from '../../data/icons';
  import ComponentIcon from "../../core/cdk/medias/Icon.vue";

  export default {
    name: 'view-styleguide-icons',
    components: {
      ComponentIcon,
      LayoutDefault
    },
    data() {
      return {
        config: config,
        data: jsonData,
      }
    }
  }
</script>

<style scoped>
  /* style scoped or not...  */
  main > div {
    padding: 1.6rem;
  }

  ul {
    margin-bottom: 1.6rem;
  }
</style>
