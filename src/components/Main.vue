<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="text-3xl font-bold">나의 유형 테스트</div>
    <img class="rounded-full" src="../assets/skyblue.png"/>
    <router-link class="text-3xl" to="/questions">시작하기</router-link>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
