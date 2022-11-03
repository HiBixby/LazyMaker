<template>
  <div class="min-h-full flex flex-col justify-center items-center">
    <div
      class="title text-[1.688rem] leading-[1.19] tracking-[-0.68px] text-black font-bold"
    >
      나는 어떤 유형의<br />수업을 들을까?
    </div>
    <img class="img w-[56.4%]" src="../assets/logo.svg" />
    <router-link
      class="btn text-white text-[0.813rem] font-bold rounded-md bg-custom-blue py-[0.8rem] w-[39.5%] h-[4.7%]"
      to="/questions"
      >내 유형 알아보기</router-link
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
  margin: 0rem 0 2.398rem 0;
}
.img {
  margin: 0 0 0.688rem 0;
}
.btn {
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
}
</style>
