/* eslint-disable */
import Vue from "vue";
import { createWebHashHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import Questions from "../components/Questions.vue";
import Result from "../components/Result.vue";
import Loader from "../components/Loader.vue";
const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: Main,
    meta: {
      title: "메인",
    },
  },
  {
    path: "/questions",
    name: "질문",
    component: Questions,
    meta: {
      title: "질문",
    },
  },
  {
    path: "/loader",
    name: "로딩",
    component: Loader,
    meta: {
      title: "분석중",
    },
    props: true,
  },
  {
    path: "/result/:mytype",
    name: "결과",
    component: Result,
    meta: {
      title: "결과",
    },
    props: true,
  },
]; //라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
