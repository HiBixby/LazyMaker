<template>
  <router-view></router-view>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  components: {},
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = "테스트 : " + to.meta.title || "나의 유형 테스트";
      },
    },
  },
};
</script>

<style>
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
