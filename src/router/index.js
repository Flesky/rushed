import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import PageNotFound from "../views/PageNotFound.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "@/views/Register";
import Account from "../views/Account.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  { path: "/home", redirect: "/" },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/products/:id",
    name: "product",
    component: () => import("../views/Product.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (this.$store.getters.user) {
//       next({path: '/login'})
//     }
//     else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router;
