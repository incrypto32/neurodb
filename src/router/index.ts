import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import NewPatient from "../views/NewPatient.vue";
import Success from "../views/Success.vue";
import VitalsForm from "../views/VitalsForm.vue";
import Login from "../views/Login.vue";
import Patients from "../views/Patients.vue";
import { fire } from "@/ts/firebase_helper";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/patients/all",
        name: "patients",
        component: Patients,
      },

      {
        path: "/patients/add",
        name: "AddPatient",
        component: NewPatient,
      },


      {
        path: "/patients/success/:id",
        name: "success",
        component: Success,
      },


      {
        path: "/patients/edit/:id",
        name: "EditPatient",
        component: NewPatient,
        props: {
          edit: true,
        },
      },

      {
        path: "/patients/vitals/:id",
        name: "vitals",
        component: VitalsForm,
        props: {
          edit: true,
        },
      },
      {
        path: "/about",
        name: "Patients",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Patients.vue"),
      },
    ],

    component: Main,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// GOOD
router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !fire.auth.currentUser) next({ name: "login" });
  else next();
});

export default router;
