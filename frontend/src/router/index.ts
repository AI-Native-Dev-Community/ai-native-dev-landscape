import { createRouter, createWebHistory } from 'vue-router'
import LandscapeView from '../views/LandscapeView.vue'
import CatalogView from '../views/CatalogView.vue'
import ToolDetail from '../components/ToolDetail.vue'
import AboutView from '../views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/landscape',
      name: 'landscape',
      component: LandscapeView,
    },

    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
