// Import all views components for vue-router
import ViewWebapp from './Webapp.vue';
import ViewWebappHome from './views/home/Home.vue';
import ViewWebappArticle from './views/article/Article.vue';
import ViewWebappLayoutDefault from './views/layouts/LayoutDefault.vue';
import ViewWebappLayoutAside from './views/layouts/LayoutAside.vue';

// Define some routes & export for app.js
export default [
  {
    path: '/webapp',
    component: ViewWebapp,
    children: [
      {
        path: '',
        component: ViewWebappHome
      },
      {
        path: 'article',
        component: ViewWebappArticle
      },
      {
        path: 'layout-default',
        component: ViewWebappLayoutDefault
      },
      {
        path: 'layout-aside',
        component: ViewWebappLayoutAside
      },
    ]
  }
];
