<template>
  <div class="p-10">
    <div class="제목">
      <div class="text-l font-bold">힐링은 나의 몫</div>
      <div class="text-2xl font-bold">러스틱 라이프를 즐기는 차크닉</div>
    </div>
    <div class="flex justify-center">
      <div class="bg-gray-300 w-36 h-36">이미지</div>
    </div>
    <div>
      힐링을 위해서 차크닉을 하며 도심으로부터 벗어나 힐링을 위해서 숲을 찾아서
      차크닉을 즐겨요!
    </div>
    <div class="animate-pulse my-5">
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
    <div @click="[Retry()]" class="bg-gray-300 rounded-md py-3 my-3">
      <i class="fa-solid fa-rotate-left"></i> 다시하기
    </div>
    <div @click="[ShareLink()]" class="bg-gray-300 rounded-md py-3 my-3">
      <i class="fa-solid fa-arrow-up-from-bracket"></i> 공유하기
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultPage",
  props: {
    msg: String,
  },
  methods: {
    ShareLink() {
      window.navigator.share({
        title: "나의 유형 테스트", // 공유될 제목
        text: "설명", // 공유될 설명
        url: "https://hibixby.github.io/TestMyType_Vue/dist/#/result", // 공유될 URL
        files: [], // 공유할 파일 배열
      });
    },
    Retry(){
      this.$router.push('/main');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
