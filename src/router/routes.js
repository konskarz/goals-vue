const routes = [
  {
    path: '/',
    component: () => import('../views/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'tasks',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/goals',
        name: 'goals',
        component: () => import('../views/GoalsView.vue')
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import('../views/ReportsView.vue')
      },
      {
        path: '/tasks/:id',
        name: 'task',
        component: () => import('../views/TaskView.vue'),
        props: true
      },
      {
        path: '/goals/:id',
        name: 'goal',
        component: () => import('../views/GoalView.vue'),
        props: true
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/ErrorNotFound.vue')
  }
]

export default routes
