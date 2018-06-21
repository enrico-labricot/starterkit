import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import baseRoutes from './routes.js';
import webappRoutes from './webapp/webapp.routes';
import styleguideRoutes from './styleguide/styleguide.routes';
// import config from './webapp/webapp.config';

const routes = baseRoutes.concat(webappRoutes).concat(styleguideRoutes);

// Router
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  // linkActiveClass: config.cssNamespace + 'is-active',
  routes
});

// Create a root instance
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
