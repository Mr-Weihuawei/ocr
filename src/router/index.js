import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/home.vue";
import Product from "../page/productModel.vue";
import Ocr from "../page/ocr.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/ocr",
    name: "Ocr",
    component: Ocr,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
