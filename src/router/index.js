import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"; // Importamos el Home público
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
// Agrega el import arriba
import TorneoExpressView from "../views/TorneoExpressView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView, // Esta es la página principal para todos
    },
    {
      path: "/login",
      name: "login",
      component: LoginView, // El login ahora vive en /login
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    // Agrega esta ruta nueva
    {
      path: "/torneo-express",
      name: "torneoExpress",
      component: TorneoExpressView,
    },
  ],
});

export default router;
