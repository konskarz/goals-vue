const routes = [
  {
    path: "/",
    component: () => import("../views/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "plan",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/goals",
        name: "goals",
        component: () => import("../views/GoalsView.vue"),
      },
      {
        path: "/tasks",
        name: "tasks",
        component: () => import("../views/TasksView.vue"),
      },
      {
        path: "/times",
        name: "times",
        component: () => import("../views/TimesView.vue"),
      },
      {
        path: "/tasks/:id",
        name: "task",
        component: () => import("../views/TaskView.vue"),
      },
      {
        path: "/goals/:id",
        name: "goal",
        component: () => import("../views/GoalView.vue"),
      },
      {
        path: "/times/:id/:task",
        name: "time",
        component: () => import("../views/TimeView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("../views/ErrorNotFound.vue"),
  },
];

export default routes;
