const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import("@/pages/About.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/pages/Login.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/pages/Register.vue"),
  },
]

export {routes};