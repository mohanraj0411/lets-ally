import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/about.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../pages/services.vue"),
  },
  {
    path: "/who-we-are",
    name: "whoWeAre",
    component: () =>
      import(/* webpackChunkName: "whoWeAre" */ "../pages/whoWeAre.vue"),
  },
  {
    path: "/our-vision",
    name: "ourVision",
    component: () =>
      import(/* webpackChunkName: "ourVision" */ "../pages/ourVision.vue"),
  },
  {
    path: "/contacts",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../pages/contact.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "NotFoundPage" */ "../pages/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
