import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'progress',
    component: () => import('@/views/ProgressView.vue')
  },
  {
    path: '/times',
    name: 'times',
    component: () => import('@/views/TimesView.vue')
  },
  {
    path: '/goals',
    name: 'goals',
    component: () => import('@/views/GoalsView.vue')
  },
  {
    path: '/time/:id/:goal',
    name: 'time',
    component: () => import('@/views/TimeView.vue')
  },
  {
    path: '/goal/:id',
    name: 'goal',
    component: () => import('@/views/GoalView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue')
  } 
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})
export default router
