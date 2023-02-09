import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { useUserStore } from "../stores/UserStore";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) =>
    savedPosition ? savedPosition : { left: 0, top: 0 },
});
router.beforeEach((to, from, next) => {
  const store = useUserStore();
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.loggedIn
  ) {
    next({ name: "login", query: { next: to.fullPath } });
  } else {
    next();
  }
});

export default router;
