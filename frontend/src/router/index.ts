import { createRouter, createWebHistory } from 'vue-router'
import LandscapeView from '../views/LandscapeView.vue'
import SearchView from '../components/SearchView.vue'
import ToolDetail from '../components/ToolDetail.vue'
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/awesome',
      name: 'awesome',
      component: () => import('../views/AwesomeView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/tool/:id',
      name: 'tool-detail',
      component: ToolDetail
    },
  ],
})

export default router
