import Vue from 'vue';
import Router from 'vue-router';

import HomeRoutes from './home';
import CartRoutes from './cart';
import DetailsRoutes from './details';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  routes: [
    HomeRoutes,
    CartRoutes,
    DetailsRoutes,
  ],
});