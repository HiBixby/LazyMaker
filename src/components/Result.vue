<template>
  <div class="result">
    <p class="tag">{{ content[mytype].hashtag }}</p>
    <p class="type">{{ mytype }}</p>
    <img class="img" v-bind:src="content[mytype].img" />
    <div class="description">{{ content[mytype].description }}</div>
    <div class="strong">강점</div>
    <div class="strong-content">{{ content[mytype].strong }}</div>
    <div class="weak">약점</div>
    <div class="weak-content">{{ content[mytype].weak }}</div>
    <div class="copy">{{ content[mytype].copy }}</div>
    <div class="btn-container">
      <button class="buy" @click="Redirect()">수면카드 사러가기</button>
      <button class="retry" @click="Retry()">다시 검사하기</button>
      <button class="share" @click="ShareLink()">공유하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultPage",
  props: {
    mytype: {
      type: String,
      default: "헤르미온느 유형!",
    },
  },
  data() {
    return {
      content: {
        "헤르미온느 유형": {
          hashtag: "#누구보다 열심히, 열정적으로",
          img: require("../assets/Type_A.svg"),
          description:
            "당신은 주로 교수님과의 면대면 강의를 선호해요!\n순간적인 집중력이 강하며, 대화의 흐름을 잘 놓치지 않아요.\n다른사람의 말을 경청하며 공감능력도 좋은 편이에요.\n하지만 지속적인 집중을 요하기때문에 쉽게 지칠 수 있어요.",
          strong:
            "1.  공부한만큼,성적이 나와요 그래서 이 수업만큼은 놓치고 싶지가 않아요\n2. 시험 문제예측이 비교적으로 쉬워요\n3. 필기후 뿌듯해진 내 자신을 발견할 수 있어요.",
          weak: "1. 필기나 강의내용을 놓치게 되면 곤란해져요\n2.높은 집중력과 암기력을 요해요\n3. 굉장한 수업참여도를 요하기 때문에 긴장의 끈을 놓을 수 없어요",
          copy: "긴장의 끊을 놓을 수 없는 당신을 위해서\n“수면여행” 수면 카드를 추천해요!",
        },
        "균형의 수호자 유형": {
          hashtag: "#협동은 나의 몫",
          img: require("../assets/Type_B.svg"),
          description:
            "당신은 주로 조별과제로 진행되는 강의를 선호해요!\n다른 사람들과 교류하는것을 즐기며, 책임감이 굉장해요.\n내가 경험하지 못한 관점에서 많은 지식을 얻어요.\n하지만 다른사람으로 부터 상처를 많이 받아요.",
          strong:
            "1. 수업시간에도 수업대신 팀플을 주로 진행하는 수업을 선호해요.\n2. 혼자가 아니여서 과제의 부담감이 혼자할때보다 줄어들어요.\n3. 타임의 관점을 적극 수용하고 여러 관점에서 시야를 넓히는걸 좋아해요.",
          weak: "1. 사람들로 인한 스트레스 지수가 높아질 수 있어요.\n2. 간혹, 팀플의 과제 전체를 떠앉아요.\n3. 많이 바쁜 한학기가 될 수 있어요.",
          copy: "사람들로 부터 스트레스 받는 당신을 위해서\n“나홀로 수면” 수면 카드를 추천해요!",
        },
        "극강의 효율 지배자 유형": {
          hashtag: "#시간과 공간의 효율지배자",
          img: require("../assets/Type_C.svg"),
          description:
            "당신은 주로 온라인으로 진행되는 강의를 선호해요!\n스스로에게 쏟는 시간이 많고, 일의 효율을 굉장히 중요시해요\n하지만, 다른 유혹거리들이 많아서 집중이 분산 되기도해요.\n　",
          strong:
            "1. 시공간의 제약이 덜하고, 가장 편한 상태에서 수업에 집중할 수 있다.\n2. 이해가 안간다면 반복 또 반복으로 완벽히 이해할 수 있어요\n　",
          weak: "1. 너무나 편안해진 나머지 나태해질 수 있어요.\n2. 현장 강의보다 긴장이 덜해 쉽게 피로할 수 있어요\n3. 화면을 오랫동안 봐야해서 눈이 아플 수 있어요",
          copy: "전자파로 피로해진 당신을 위한 휴식,\n“숲속요람” 수면 카드를 추천해요!",
        },
      },
    };
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
      window.scrollTo(0, 0);
      this.$router.push("/questions");
    },
    Redirect() {
      const REDIRECT_URL = "https://2022.khvd.kr/";
      window.open(REDIRECT_URL);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #0371e8;
}
.tag {
  margin: 6.75rem 0 0 0;
  font-weight: 500;
  font-size: 0.938rem;
}
.type {
  font-weight: 800;
  font-size: 1.875rem;
}
.img {
  margin: 0.975rem 0 0.812rem 0;
  width: 12.256rem;
}
.description {
  white-space: pre-line;
  font-weight: 600;
  font-size: 0.813rem;
  line-height: 1.54;
  letter-spacing: -0.26px;
  margin: 0 0 2.313rem 0;
}
.strong {
  background-color: #0371e8;
  color: white;
  width: 3.813rem;
  height: 1.563rem;
  border-radius: 13px;
  font-size: 0.938rem;
  font-weight: bold;
  line-height: 1.47;
  display: flex;
  justify-content: center;
  align-items: center;
}
.strong-content {
  white-space: pre-line;
  font-size: 0.75rem;
  margin: 0.813rem 0 1.563rem 0;
  line-height: 1.83;
  letter-spacing: -0.16px;
}
.weak {
  background-color: #0371e8;
  color: white;
  width: 3.813rem;
  border-radius: 13px;
  font-size: 0.938rem;
  font-weight: bold;
  height: 1.563rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.weak-content {
  white-space: pre-line;
  font-size: 0.75rem;
  line-height: 1.83;
  letter-spacing: -0.16px;
  margin: 0.813rem 0 2.375rem 0;
}
.copy {
  white-space: pre-line;
  font-weight: bold;
  font-size: 0.938rem;
  margin: 0 0 2.063rem 0;
}
.btn-container {
  display: flex;
  flex-direction: column;
  width: 8.25rem;
  color: white;
  justify-content: space-between;
  height: 8.5rem;
  margin: 0 0 4.875rem 0;
}
.buy {
  background-color: #0371e8;
  font-size: 0.813rem;
  font-weight: 300;
  height: 2.313rem;
  border-radius: 10px;
}
.retry {
  background-color: #afceff;
  font-size: 0.813rem;
  font-weight: 300;
  height: 2.313rem;
  border-radius: 10px;
}
.share {
  background-color: #afceff;
  font-size: 0.813rem;
  font-weight: 300;
  border-radius: 10px;
  height: 2.313rem;
}
</style>
