<template>
  <!-- encapsulation is required -->
  <layout-default>
    <div class="container" slot="main">
      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Basic panel</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div>
              <component-panel-card>
                <header slot="header">
                  <h1 :class="config.cssNamespace + 'panel-title'">Header title here...</h1>
                </header>

                <div :class="config.cssNamespace + 'panel-body'" slot="body">
                  <p>Body content here...</p>
                </div><!--/.body -->

                <footer slot="footer">
                  <p>Footer content here...</p>
                </footer>
              </component-panel-card>
            </div>

            <div>
              <component-panel-card>
                <header slot="header">
                  <div :class="config.cssNamespace + 'wrapper'">
                    <h1 :class="config.cssNamespace + 'panel-title'">Header title here...</h1>
                    <component-button-icon v-bind:icon="'icon-users'"></component-button-icon>
                  </div>
                </header>

                <div :class="config.cssNamespace + 'panel-body'" slot="body">
                  <p>Body content here...</p>
                </div><!--/.body -->

                <footer slot="footer">
                  <p>Footer content here...</p>
                </footer>
              </component-panel-card>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Default panel-card</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="panelCard in data.default"
                 :key="panelCard">
              <component-panel-card
                :type="panelCard.type"
                :title="panelCard.title"
                :color="panelCard.color"
                :active="panelCard.active"
                :disabled="panelCard.disabled">
                <header slot="header">
                  <h1 :class="config.cssNamespace + 'panel-title'">{{ panelCard.title }}</h1>
                </header>
                <div v-if="!panelCard.disabled" :class="config.cssNamespace + 'panel-body'" slot="body">
                  <div :class="config.cssNamespace + 'wrapper'">
                    <ul :class="config.cssNamespace + 'list-icons'">
                      <li>
                        <component-icon name="icon-location"></component-icon>
                        <span>A- 18901 Saint-Chamarand</span>
                      </li>
                      <li>
                        <component-icon name="icon-limit-right"></component-icon>
                        <span>07/07/17 - DMA</span>
                      </li>
                    </ul>

                    <div :class="config.cssNamespace + 'users'">
                      <component-icon name="icon-users"></component-icon>
                      <sup>2</sup>
                    </div>
                  </div><!--/.wrapper -->
                </div><!--/.body -->
              </component-panel-card>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Fill panel-card</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="panelCard in data.fill"
                 :key="panelCard">
              <component-panel-card
                :type="panelCard.type"
                :title="panelCard.title"
                :color="panelCard.color"
                :pinned="panelCard.pinned"
                :active="panelCard.active"
                :disabled="panelCard.disabled">
                <header slot="header">
                  <div :class="config.cssNamespace + 'wrapper'">
                    <h1 :class="config.cssNamespace + 'panel-title'">
                      <button v-on:click.native="toggleSelect">{{ panelCard.title }}</button>
                    </h1>
                    <component-button-icon v-if="panelCard.pinned == 'on'" v-bind:icon="'icon-pin-on'"></component-button-icon>
                    <component-button-icon v-if="panelCard.pinned == 'off'" v-bind:icon="'icon-pin-off'"></component-button-icon>
                  </div>
                </header>
                <div :class="config.cssNamespace + 'bloc-toggle'" slot="description">
                  <p :class="config.cssNamespace + 'description'">
                    Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl.
                    Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl.
                  </p>
                </div>

                <div :class="config.cssNamespace + 'panel-body'" slot="body">
                  <div :class="config.cssNamespace + 'wrapper'">
                    <ul :class="config.cssNamespace + 'list-icons'">
                      <li>
                        <component-icon name="icon-location"></component-icon>
                        <span>A- 18901 Saint-Chamarand (avec plus de texte pour affichage non tronqué)</span>
                      </li>
                      <li>
                        <component-icon name="icon-limit-right"></component-icon>
                        <span>07/07/17 - DMA</span>
                      </li>
                      <li>
                        <component-icon name="icon-clock"></component-icon>
                        <span>2h00</span>
                      </li>
                    </ul>

                    <div :class="config.cssNamespace + 'users'">
                      <component-icon name="icon-users"></component-icon>
                      <sup>2</sup>
                    </div>
                  </div><!--/.wrapper -->

                  <div :class="config.cssNamespace + 'bloc-toggle'">
                    <ul :class="config.cssNamespace + 'list-icons'">
                      <li>
                        <component-icon name="icon-book"></component-icon>
                        <ul :class="config.cssNamespace + 'list'">
                          <li>C - Souterrain HTA et BT</li>
                          <li>D - Manoeuvre et consignation</li>
                        </ul>
                      </li>
                    </ul>
                    <ul :class="config.cssNamespace + 'list-icons'">
                      <li>
                        <component-icon name="icon-users"></component-icon>
                        <ul :class="config.cssNamespace + 'list'">
                          <li>Mélanie Guillot</li>
                          <li>Adeline Pereira</li>
                        </ul>
                      </li>
                    </ul>
                  </div><!--/.bloc-toggle -->
                </div><!--/.body -->

                <footer slot="footer">
                  <ul :class="config.cssNamespace + 'list-buttons'">
                    <li>
                      <component-button
                        :css="'btn'"
                        :disabled="panelCard.disabled">
                        Programmer
                      </component-button>
                    </li>
                  </ul>
                </footer>
              </component-panel-card>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Plain panle-card (with fixed height)</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="panelCard in data.plain"
                 :key="panelCard">
              <component-panel-card
                :type="panelCard.type"
                :title="panelCard.title"
                :color="panelCard.color"
                :active="panelCard.active"
                :disabled="panelCard.disabled">
                <div v-if="(panelCard.content)" :class="config.cssNamespace + 'panel-body'" slot="body">
                  <component-icon
                    v-for="icon in panelCard.content.icons"
                    :key="icon"
                    :name="icon">
                  </component-icon>
                  <p v-if="panelCard.content">{{panelCard.content.text}}</p>
                </div><!--/.body -->
              </component-panel-card>
            </div>
          </div>
        </div>
      </section>

      <section :class="config.cssNamespace + 'panel'">
        <header>
          <h1>Styleguide: Media panel-card</h1>
        </header>
        <div :class="config.cssNamespace + 'panel-body'">
          <div class="wrapper">
            <div v-for="panelCard in data.media"
                 :key="panelCard">
              <component-panel-card
                :type="panelCard.type"
                :title="panelCard.title"
                :color="panelCard.color"
                :active="panelCard.active"
                :disabled="panelCard.disabled">
                <button :class="config.cssNamespace + 'panel-body'" slot="body">
                  <span :class="config.cssNamespace + 'media'">
                    <component-icon :name="panelCard.icon"></component-icon>
                  </span>
                  <span :class="config.cssNamespace + 'content'">
                    <span>{{ panelCard.content }}</span>
                  </span>
                </button><!--/.body -->
              </component-panel-card>
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
  import jsonData from '../../data/cards';
  import ComponentButton from "../../core/cdk/buttons/Button.vue";
  import ComponentButtonIcon from "../../core/cdk/buttons/ButtonIcon.vue";
  import ComponentIcon from "../../core/cdk/medias/Icon.vue";
  import ComponentPanelCard from "../../core/cdk/panels/PanelCard.vue";

  export default {
    name: 'view-styleguide-cards',
    components: {
      LayoutDefault,
      ComponentButton,
      ComponentButtonIcon,
      ComponentIcon,
      ComponentPanelCard
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
  .wrapper {
    display: grid;
    margin: 0 2.4rem;
    grid-template-columns: repeat(4, 25rem);
    grid-gap: 1.6rem;
  }

  .container > .sqli__panel > header {
    padding: 1.6rem;
  }

  .sqli__panel-card-plain {
    min-height: 5rem;
  }
</style>
