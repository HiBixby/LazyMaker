<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="">ㅁㅁ로 알아보는 유형 테스트</div>
    <div class="text-3xl font-bold">나는 어떤 유형일까?</div>
    <img class="rounded-full my-24 w-48" src="../assets/skyblue.png" />
    <router-link
      class="text-xl rounded-md bg-blue-300 py-3 w-48"
      to="/questions"
      >시작하기</router-link
    >
  </div>
</template>

<script>
export default {
  name: "MainPage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
