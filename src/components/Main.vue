<template>
  <div class="min-h-full flex flex-col justify-center items-center">
    <div class="text-[1.688rem] leading-[1.19] tracking-[-0.68px] text-black font-bold">나는 어떨 때<br/>꾸벅꾸벅 졸까..?</div>
    <img class="w-[38.8%]" src="../assets/logo.svg" />
    <div class="font-thin text-xs">흠냐흠냐...잠이온다..</div>
    <router-link
      class="text-white text-[.813rem] font-bold rounded-md bg-custom-blue py-3 w-[44.6%]"
      to="/questions"
      >내 지루함 알아보기</router-link
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
.btn-start{
  color:white;
}
</style>
