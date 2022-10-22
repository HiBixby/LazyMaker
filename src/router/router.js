import { createWebHistory, createRouter } from "vue-router";
import Main from "../components/Main.vue";
import Questions from "../components/Questions.vue";
import Result from "../components/Result.vue";
const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/questions",
    name: "질문",
    component: Questions,
  },
  {
    path: "/result",
    name: "결과",
    component: Result,
  },
]; //라우팅 패스, 컴포넌트 등 정의

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
