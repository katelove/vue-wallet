import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const RouteView = {
  name: "RouteView",
  render: (h) => h("router-view"),
};
const routes = [
    {
        path:"/login/:action/:safeVerify",
        component: RouteView,
        children:[
            {
                path: "/login",
                name: "Login",
                component: () => import("@/views/Login/Login.vue"),
              },
              {
                path: "/login/:action",
                name: "ModalDragVerify",
                component: () => import("@/views/Login/ModalDragVerify.vue"),
              },
              {
                path: "/login/verify/:safeVerify",
                name: "LoginSafeVerify",
                component: () => import("@/views/Login/LoginPage.vue"),
              },
        ]
    },
  {
    path: "/reset/:action/:nextStep",
    component: RouteView,
    children: [
      {
        path: "/reset",
        name: "ResetLogin",
        component: () => import("@/views/Login/Reset/ResetLogin.vue"),
      },
      {
        path: "/reset/:action",
        name: "ResetDragVerify",
        component: () => import("@/views/Login/Reset/ResetDragVerify.vue"),
      },
      {
        path: "/reset/:action/:nextStep",
        name: "ResetSafeVerify",
        component: () => import("@/views/Login/Reset/ResetSafeVerify.vue"),
      },
      {
        path: "/reset/dragverify/:action/:nextStep",
        name: "ResetPwd",
        component: () => import("@/views/Login/Reset/ResetPwd.vue"),
      },
    ],
  },
  {
    path: "/register/:action/:type",
    component: RouteView,
    children: [
      {
        path: "/register",
        name: "Rgister",
        component: () => import("@/views/Login/Register/RegisterPage.vue"),
      },
      {
        path: "/register/:action",
        name: "ModalDragVerify",
        component: () => import("@/views/Login/ModalDragVerify.vue"),
      },
      {
        path: "/register/:action/:type",
        name: "RegisterVerify",
        component: () => import("@/views/Login/Register/RegisterVerify.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  //   base: "/frontend",
});

export default router;
