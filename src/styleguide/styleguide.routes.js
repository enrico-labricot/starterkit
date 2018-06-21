import ViewStyleguide from './Styleguide.vue';
import ViewStyleguideIcons from './views/overview/Icons.vue';
import ViewStyleguideCards from './views/overview/Cards.vue';
import ViewStyleguideButtons from './views/overview/Buttons.vue';

// Define some routes & export for app.js
export default [
  {
    path: '/styleguide',
    component: ViewStyleguide,
    children: [
      {
        path: 'icons',
        component: ViewStyleguideIcons
      },
      {
        path: '/styleguide/cards',
        component: ViewStyleguideCards
      },
      {
        path: '/styleguide/buttons',
        component: ViewStyleguideButtons
      },
    ]
  }
];
