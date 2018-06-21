<template>
  <aside :class="config.cssNamespace + 'aside-nav'">
    <div :class="config.cssNamespace + 'nav-wrapper'">
      <router-link to="/" :class="config.cssNamespace + 'wrapper-logo'" title="Retour à l'accueil">
        <component-image :class="config.cssNamespace + 'logo'" name="logo-sqli"></component-image>
      </router-link>

      <nav :class="config.cssNamespace + 'nav-main'" id="nav-main">
        <ul>
          <li>
            <router-link to="/webapp/article">
              <component-icon name="icon-book"></component-icon>
              <span>Page article</span>
            </router-link>
          </li>
          <li>
            <router-link to="/webapp/layout-default">
              <component-icon name="icon-book"></component-icon>
              <span>Layout | Default</span>
            </router-link>
          </li>
          <li>
            <router-link to="/webapp/layout-aside">
              <component-icon name="icon-book"></component-icon>
              <span>Layout | Default + Aside</span>
            </router-link>
          </li>
          <li>
            <router-link to="/styleguide/icons">
              <component-icon name="icon-book"></component-icon>
              <span>Styleguide | icons</span>
            </router-link>
          </li>
          <li>
            <router-link to="/styleguide/cards">
              <component-icon name="icon-book"></component-icon>
              <span>Styleguide | cards</span>
            </router-link>
          </li>
          <li>
            <router-link to="/styleguide/buttons">
              <component-icon name="icon-book"></component-icon>
              <span>Styleguide | buttons</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
  import config from '../../../webapp.config';
  import ComponentButton from "../../../../styleguide/core/cdk/buttons/Button.vue";
  import ComponentButtonIcon from "../../../../styleguide/core/cdk/buttons/ButtonIcon.vue";
  import ComponentIcon from "../../../../styleguide/core/cdk/medias/Icon.vue";
  import ComponentImage from "../../../../styleguide/core/cdk/medias/Image.vue";
  import ComponentTabs from "../../../../styleguide/core/cdk/tabs/Tabs.vue";

  export default {
    components: {
      ComponentTabs,
      ComponentButton,
      ComponentButtonIcon,
      ComponentIcon,
      ComponentImage
    },
    name: 'module-navigation',
    data() {
      return {
        config: config
      }
    },
    methods: {
      toggleNav: function (event) {
        if (this.$el.classList.contains(this.config.cssNamespace + this.config.states.opened)) {
          this.closeNav();
        } else {
          this.openNav();
        }
      },
      openNav: function (event) {
        this.$el.classList.add(this.config.cssNamespace + this.config.states.opened);
      },
      closeNav: function (event) {
        this.$el.classList.remove(this.config.cssNamespace + this.config.states.opened);
      }
    }
  }
</script>

<style>
  /* style scoped or not...  */
</style>
