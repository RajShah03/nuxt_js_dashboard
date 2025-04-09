import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import StrategyView from '@/views/StrategyView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/strategy/:id',
    name: 'strategy',
    component: StrategyView,
    props: route => ({ 
      strategyId: parseInt(route.params.id) 
    })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
