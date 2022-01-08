import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
