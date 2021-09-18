import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        name: "reset",
        path: "/reset", 
        component: () => import("@/views/Reset/ResetPwd.vue"),
    }
 ]

 const router = new VueRouter({
    routes,
    mode: 'history',
  //   base: "/frontend",
  });

  export default router;