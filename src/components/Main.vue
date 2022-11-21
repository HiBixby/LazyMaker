<template>
  <div class="min-h-full flex flex-col justify-center items-center">
    <div
      class="title text-[1.688rem] leading-[1.19] tracking-[-0.68px] text-black font-bold"
    >
      나는 어떤 유형의<br />수업을 들을까?
    </div>
    <img class="img h-[22.2%]" src="../assets/logo.svg" />
    <router-link
      class="btn text-white text-[0.813rem] font-bold rounded-md bg-custom-blue py-[0.8rem] w-[39.5%] h-[4.7%]"
      to="/questions"
      >내 유형 알아보기</router-link
    >
  </div>
</template>

<script>
import { useMeta } from 'vue-meta';
export default {
  name: "MainPage",
  props: {},
  setup(){
    useMeta({
      title:"Lazy maker - 메인",
      meta:[
        {vmid:'og:title',property:'og:title',content:'Lazy maker'},
        {vmid:'og:description',property:'og:description',content:'나는 어떤 유형의 수업을 들을까?'},
        {vmid:'og:image',property:'og:image',content:'https://raw.githubusercontent.com/HiBixby/LazyMaker_Vue/2f530883610196c0889f266b6ec970bb6f8ea877/src/assets/logo.svg'},
      ]
    })
  },
  
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
