import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [{ path: "", name: "Home", component: () => import("@/views/HomeView.vue") }],
  },
  {
    path: "/about",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [{ path: "", name: "About", component: () => import("@/views/AboutView.vue") }],
  },
  {
    path: "/contacts",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [{ path: "", name: "Contacts", component: () => import("@/views/ContactsView.vue") }],
  },
  {
    path: "/modal",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [{ path: "", name: "Contacts", component: () => import("@/views/ModalView.vue") }],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
