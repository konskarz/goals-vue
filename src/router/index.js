import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "progress",
        component: () => import("@/pages/ProgressPage.vue"),
      },
      {
        path: "/times",
        name: "times",
        component: () => import("@/pages/TimesPage.vue"),
      },
      {
        path: "/goals",
        name: "goals",
        component: () => import("@/pages/GoalsPage.vue"),
      },
      {
        path: "/times/:id/:goal",
        name: "time",
        component: () => import("@/pages/TimePage.vue"),
      },
      {
        path: "/goals/:id",
        name: "goal",
        component: () => import("@/pages/GoalPage.vue"),
      },
      {
        path: "/tasks/:id",
        name: "task",
        component: () => import("@/pages/TaskPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/BlankLayout.vue"),
    children: [
      {
        path: "/auth",
        name: "auth",
        component: () => import("@/pages/AuthPage.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
export default router;
