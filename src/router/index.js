import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { authStore } from '../store/modules/authStore'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
      permission: {
        controller: 'ContactController',
        action: 'index'
      }
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: 'About',
      permission: {
        controller: 'BookOrderController',
        action: 'index'
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = authStore()
  const listPermission = auth.permissionList; 
  const permission = to.meta.permission ? to.meta.permission : null;

  if (permission && !listPermission[permission.controller].includes(permission.action)) {
    next('/login');
  }
  window.document.title = to.meta && to.meta.title ? to.meta.title : 'Binggo';
  
  next();
});

export default router;
