<template>
  <metainfo></metainfo>
  <router-view></router-view>
</template>

<script>
import { useMeta } from "vue-meta";

/* eslint-disable */
export default {
  name: "App",
  components: {},
  setup() {
    useMeta({
      title: "Lazy maker",
      description: "내 유형 알아보기",
      meta: [{ property: "og.title", content: "Lazy maker" }],
    });
  },
};
</script>

<style>
:root {
  --cerulean-blue: #0371e8;
  --carolina-blue: #83b3ff;
  --baby-blue: #afceff;
  --bright-grey: #f3f3f3;
  --greyish: #afafaf;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100%;
}
</style>
