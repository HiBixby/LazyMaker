<template>
  <div class="main-container">
    <div class="title">나는 어떤 유형의<br />수업을 들을까?</div>
    <img
      class="logo"
      src="../assets/logo.svg"
      alt="머리를 짚고 필기하는 여자 그림"
    />
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
  metaInfo() {
    return {
      title: "Lazy maker - 내 유형 알아보기",
      description: "나는 어떤 유형의 수업을 들을까?",
      meta: [
        { name: "og:title", content: "내 유형 알아보기" },
        { name: "og:site_name", content: "Lazy maker" },
        { name: "og:description", content: "나는 어떤 유형의 수업을 들을까" },
        {
          name: "og:image",
          content:
            "https://raw.githubusercontent.com/HiBixby/LazyMaker_Vue/fa889c38f1397e5148c8855a98652a5ed2855c9a/src/assets/logo.svg",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  width: 10.625rem;
  height: 3.938rem;
  margin: 0rem 0 2.398rem 0;
  font-size: 1.688rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: -0.68px;
  text-align: center;
}
.logo {
  width: 13.75rem;
  margin: 0 0 0.688rem 0;
}
.btn {
  width: 9.625rem;
  margin: 0;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
}
</style>
