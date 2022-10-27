<template>
  <div class="min-h-full flex flex-col justify-center items-center">
    <div
      class="title text-[1.688rem] leading-[1.19] tracking-[-0.68px] text-black font-bold"
    >
      나는 어떨 때<br />꾸벅꾸벅 졸까..?
    </div>
    <img class="img w-[38.8%]" src="../assets/logo.svg" />
    <div class="sub font-thin text-xs">흠냐흠냐...잠이온다..</div>
    <router-link
      class="btn text-white text-[0.813rem] font-bold rounded-md bg-custom-blue py-4 w-[44.6%]"
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
.title {
  margin: 0rem 0 1.934rem 0;
}
.img {
  margin: 0 0 0.658rem 0;
}
.sub {
  margin: 0 0 2.313rem 0;
}
.btn {
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
}
</style>
