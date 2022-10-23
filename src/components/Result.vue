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
      if (navigator.share) {
        navigator.share({
          title: "나의 유형 테스트", // 공유될 제목
          text: "설명", // 공유될 설명
          url: window.document.location.href, // 공유될 URL
          files: [], // 공유할 파일 배열
        });
      } else {
        let url = ""; // <a>태그에서 호출한 함수인 clip 생성
        const textarea = document.createElement("textarea");
        //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성

        document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
        url = window.document.location.href; //url에는 현재 주소값을 넣어줌
        textarea.value = url; // textarea 값에 url를 넣어줌
        textarea.select(); //textarea를 설정
        document.execCommand("copy"); // 복사
        document.body.removeChild(textarea); //extarea 요소를 없애줌
        alert("링크가 복사되었어요!");
      }
    },
    Retry() {
      this.$router.push("/main");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
