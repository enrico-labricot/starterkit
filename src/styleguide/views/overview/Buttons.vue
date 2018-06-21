<template>
  <!-- encapsulation is required -->
  <layout-default>
    <div slot="main">
      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Buttons default</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="button in data.default"
                 :key="button">
              <component-button
                :css="button.css"
                :disabled="button.disabled"
                :active="button.active">
                {{ button.text }}
              </component-button>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Buttons invert</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper invert">
            <div v-for="button in data.invert"
                 :key="button">
              <component-button
                :css="button.css"
                :disabled="button.disabled"
                :active="button.active">
                {{ button.text }}
              </component-button>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Buttons filter</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="button in data.filters"
                 :key="button">
              <component-button
                :css="button.css"
                :data-color="button.color">
                <span>{{ button.text }}</span>
                <component-icon name="icon-cross"></component-icon>
              </component-button>
            </div>
            <div v-for="button in data.filters"
                 :key="button">
              <component-button
                :css="button.css"
                :data-color="button.color"
                :active="true">
                <span>{{ button.text }}</span>
                <component-icon name="icon-cross"></component-icon>
              </component-button>
            </div>
            <div v-for="button in data.filters"
                 :key="button">
              <component-button
                :css="button.css"
                :data-color="button.color"
                :disabled="true">
                <span>{{ button.text }}</span>
                <component-icon name="icon-cross"></component-icon>
              </component-button>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Buttons label</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="button in data.labels"
                 :key="button">
              <component-button
                :css="button.css"
                :data-color="button.color"
                :disabled="button.disabled"
                :active="button.active">
                {{ button.text }}
              </component-button>
            </div>

            <div v-for="button in data.labels"
                 :key="button">
              <component-button
                :css="button.css"
                :data-color="button.color"
                :active="true">
                {{ button.text }}
              </component-button>
            </div>

            <div v-for="button in data.labels"
                 :key="button">
              <component-button
                :css="button.css"
                :data-color="button.color"
                :disabled="true">
                {{ button.text }}
              </component-button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </layout-default>
</template>

<script>
  import LayoutDefault from "../../../webapp/common/03_layouts/LayoutDefault.vue"; // temp => create a styleguide layout
  import config from '../../styleguide.config';
  import jsonData from '../../data/buttons';
  import ComponentIcon from "../../core/cdk/medias/Icon.vue";
  import ComponentButton from "../../core/cdk/buttons/Button.vue";

  export default {
    name: 'view-styleguide-buttons',
    components: {
      ComponentButton,
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
  .sqli__panel header {
    padding: 1.6rem;
  }

  .wrapper {
    display: grid;
    padding: 1.6rem;
    margin: 0 2.4rem;
    grid-template-columns: repeat(4, 25rem);
    grid-gap: 1.6rem;
  }

  .wrapper.invert {
    padding: 1.6rem;
    background-color: #222d3a;
  }
</style>
