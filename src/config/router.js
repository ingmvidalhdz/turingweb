import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const AboutView = () => import("@/views/AboutView.vue");

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: HomeView
  },
  {
    path: "/about",
    name: "Nosotros",
    component: AboutView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
