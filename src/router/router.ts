import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../pages/FootballPage.vue"),
    meta: {
      title: "Football",
      keepAlive: true,
    },
  },
  {
    path: "/tabla-de-posiciones",
    component: () => import("../pages/TablePage.vue"),
    meta: {
      title: "Tabla de posiciones",
      keepAlive: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
