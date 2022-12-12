const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "plan",
        component: () => import("pages/TimelinePage.vue"),
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
    path: "/",
    component: () => import("layouts/BlankLayout.vue"),
    children: [
      {
        path: "/auth",
        name: "auth",
        component: () => import("pages/AuthPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
