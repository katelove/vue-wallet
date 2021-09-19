import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const RouteView = {
  name: "RouteView",
  render: (h) => h("router-view"),
};
const routes = [
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
        path: "/reset/verify/:action/:nextStep",
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
    //   {
    //     path: "/register/:action",
    //     name: "ModalDragVerify",
    //     component: () => import("@/views/Login/ModalDragVerify.vue"),
    //   },
      {
        path: "/register/:action/:type",
        name: "PhoneVerify",
        component: () => import("@/views/Login/Register/PhoneVerify.vue"),
      },
      {
        path: "/register/verify/mail",
        name: "MailVerify",
        component: () => import("@/views/Login/Register/MailVerify.vue"),
      },
      {
        path: "/register/verify/name",
        name: "NameVerify",
        component: () => import("@/views/Login/Register/NameVerify.vue"),
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
