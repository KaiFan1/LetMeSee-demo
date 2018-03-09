import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import HomeRoutes from './home';
import CartRoutes from './Cart';
import DetailsRoutes from './Details';


Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    HomeRoutes,
    CartRoutes,
    DetailsRoutes,
  ],
});