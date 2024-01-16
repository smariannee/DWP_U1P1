import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),
      },
      {
        path: "/rentar_espacios",
        name: "otros-espacios",
        component: () => import("../components/OtrosEspacios.vue"),
      },
      {
        path: "/renta_tu_espacio",
        name: "mis-espacios",
        component: () => import("../components/MisEspacios.vue"),
      },
      {
        path: "/info_espacio",
        name: "info",
        component: () => import("../components/Info.vue"),
      },
      {
        path: "/oferta",
        name: "oferta",
        component: () => import("../components/Oferta.vue"),
      },
      {
        path: "/catalogo",
        name: "catalogo",
        component: () => import("../components/Catalogo.vue"),
      },
      {
        path: "/detalles",
        name: "detalles",
        component: () => import("../components/Detalles.vue"),
      }
    ],
  },
];

const router = new VueRouter({ routes });
export default router;