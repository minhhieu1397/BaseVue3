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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue")
  },
  {
    path: "/unauthorized",
    name: "Unauthorized",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Unauthorized.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/commons/PageNotFound.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = authStore()
  const listPermission = auth.permissionList; 
  const permission = to.meta.permission ? to.meta.permission : null;
  if (
    (permission && !listPermission[permission.controller].includes(permission.action)) ||
    (to.name != 'Login' && !auth.token)
  ) {
    next('/login');
  }
  window.document.title = to.meta && to.meta.title ? to.meta.title : 'Binggo';
  
  next();
});

export default router;
