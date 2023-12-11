import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StoreView from '../views/StoreView.vue';
import ItemView from '../views/ItemView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/store',
      name: 'store',
      component: StoreView
    },
    {
      path: '/item/:slug',
      name: 'item',
      component: ItemView
    }
  ]
});

export default router
