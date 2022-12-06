import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue"
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const routes = [ // En las rutas siempre debe aparecer SIEMPRE como minimo path: y component:
  {
    path: "/auth", // path = URL
    component: Auth,
    children: [
      { path: "login", component: SignIn },
      { path: "signup", component: SignUp },
    ],
  },
  { path: "/", component: Home },
  { path: "/account", component: Account }
];

const router = createRouter({ // crear router
  history: createWebHistory(), //historial del router
  routes, // Declarar la const creada donde aparecen todos las rutas.
});

export default router; // exportar el router por el metdo default
