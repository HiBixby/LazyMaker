<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div class="">ㅁㅁ로 알아보는 유형 테스트</div>
    <div class="text-3xl font-bold">나는 어떤 유형일까?</div>
    <img class="rounded-full my-5 w-48" src="../assets/skyblue.png"/>
    <router-link class="text-xl rounded-md bg-blue-300 p-3" to="/questions">시작하기</router-link>
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
