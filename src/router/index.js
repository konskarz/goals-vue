import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "progress",
        component: () => import("@/views/ProgressView.vue"),
      },
      {
        path: "/times",
        name: "times",
        component: () => import("@/views/TimesView.vue"),
      },
      {
        path: "/goals",
        name: "goals",
        component: () => import("@/views/GoalsView.vue"),
      },
      {
        path: "/times/:id/:goal",
        name: "time",
        component: () => import("@/views/TimeView.vue"),
      },
      {
        path: "/goals/:id",
        name: "goal",
        component: () => import("@/views/GoalView.vue"),
      },
      {
        path: "/auth",
        name: "auth",
        component: () => import("@/views/AuthView.vue"),
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
