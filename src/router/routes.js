const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "plan",
        component: () => import("pages/PlanPage.vue"),
      },
      {
        path: "/goals",
        name: "goals",
        component: () => import("pages/GoalsPage.vue"),
      },
      {
        path: "/tasks",
        name: "tasks",
        component: () => import("pages/TasksPage.vue"),
      },
      {
        path: "/times",
        name: "times",
        component: () => import("pages/TimesPage.vue"),
      },
      {
        path: "/tasks/:id",
        name: "task",
        component: () => import("pages/TaskPage.vue"),
      },
      {
        path: "/goals/:id",
        name: "goal",
        component: () => import("pages/GoalPage.vue"),
      },
      {
        path: "/times/:id/:task",
        name: "time",
        component: () => import("pages/TimePage.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("pages/LoginPage.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
