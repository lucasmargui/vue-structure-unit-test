import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComponente from '@/components/rotas/HomeComponente.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponente
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router