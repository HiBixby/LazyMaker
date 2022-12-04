<template>
  <div class="survey-container">
    <div class="nav">
      <!-- progress bar -->
      <div class="progress-bar py-10 flex-none">
        <div class="background-bar w-full bg-[#f3f3f3] rounded-full h-3.5">
          <div
            class="blue-bar rounded bg-[#83b3ff] h-3.5 transition-all"
            :style="{ width: (page / (questions.length / 4 - 1)) * 100 + '%' }"
          ></div>
        </div>
      </div>
      <!-- prev button -->
      <div class="text-left flex-none">
        <button @click="ShowPrevPage()" class="btn-prev" v-if="page">
          <img src="../assets/btn-prev.svg" />
        </button>
        <p class="indicator">
          <span class="text-custom-blue font-bold">{{ page + 1 }}</span
          >/5
        </p>
      </div>
    </div>
    <!-- Question -->
    <div class="questions_container overflow-auto">
      <div
        v-bind:id="'question__' + (i + page * 4)"
        class="q"
        v-for="i in 4"
        :key="GenerateKey(i)"
      >
        <div class="question__number" v-bind:class="{ done: isChecked(i) }">
          Q{{ i + page * 4 }}
        </div>
        <div class="question__content" v-bind:class="{ done: isChecked(i) }">
          {{ questions[i + page * 4 - 1].title }}
        </div>
        <!-- option -->
        <div class="options">
          <fieldset>
            <input
              type="radio"
              v-bind:id="'yes_' + (i + page * 4)"
              v-bind:name="i + page * 4"
              v-model="selected[i + page * 4]"
              value="1"
              @click="HandleAnswerClick"
              required
            />
            <label v-bind:for="'yes_' + (i + page * 4)">그렇다</label>
            <input
              type="radio"
              v-bind:id="'idk_' + (i + page * 4)"
              v-bind:name="i + page * 4"
              v-model="selected[i + page * 4]"
              value="0"
              @click="HandleAnswerClick"
              required
            />
            <label v-bind:for="'idk_' + (i + page * 4)">잘모르겠다</label>
            <input
              type="radio"
              v-bind:id="'no_' + (i + page * 4)"
              v-bind:name="i + page * 4"
              v-model="selected[i + page * 4]"
              value="-1"
              @click="HandleAnswerClick"
              required
            />
            <label v-bind:for="'no_' + (i + page * 4)">아니다</label>
          </fieldset>
        </div>
      </div>
    </div>
    <div class="btn-next__container">
      <button
        class="btn-next"
        type="submit"
        @click="ShowNextPage()"
        v-bind:class="{ invisible: !isAllChecked }"
      >
        {{ btnMsg[page] }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionsPage",
  props: {},
  methods: {
    CalculateType() {
      let selected = this.selected.map((a) => parseInt(a));
      /**
       *
       * @param {number} start 시작 인덱스
       * @param {number} end 끝 인덱스
       * @returns {number} 해당 구간의 합을 반환한다
       */
      function CalculateScoreOfEachType(start, end) {
        return selected.slice(start, end).reduce((acc, cur) => acc + cur);
      }
      let score = [
        {
          type: "A",
          score: CalculateScoreOfEachType(1, 5),
        },
        {
          type: "B",
          score: CalculateScoreOfEachType(5, 9),
        },
        {
          type: "C",
          score: CalculateScoreOfEachType(9, 13),
        },
      ];
      //예외처리
      //13~14
      selected.slice(13, 15).forEach((answer) => {
        if (answer === 1) score[0].score++;
      });

      //15~16
      selected.slice(15, 17).forEach((answer) => {
        if (answer === 1) score[1].score++;
      });

      //17~18
      selected.slice(17, 19).forEach((answer) => {
        if (answer === 1) score[2].score++;
      });

      //19
      if (selected[19] === 1) {
        score[1].score++;
        score[2].score++;
      } else if (selected[19] === -1) {
        score[0].score++;
      }
      //20
      if (selected[20] === 1) {
        score[2].score++;
      } else if (selected[20] === -1) {
        score[1].score++;
      }

      const sortedScore = score.sort(function (a, b) {
        return b.score - a.score;
      });
      this.type = sortedScore[0].type;
      return this.type;
    },
    ShowNextPage() {
      if (this.page < 4) {
        //마지막 페이지가 아니면
        this.page += 1;
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      } else {
        //마지막 페이지 라면
        this.CalculateType();
        console.log(this.type);
        this.$router.push({ name: "로딩", query: { mytype: this.type } });
      }
    },
    ShowPrevPage() {
      if (this.page) {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        this.page -= 1;
      } else {
        history.back();
      }
    },
    HandleAnswerClick(event) {
      const questionNumber = parseInt(event.currentTarget.id.split("_")[1]);
      const answer = event.currentTarget.value;
      if (this.selected[questionNumber] == answer) {
        this.selected[questionNumber] = undefined;
      } else {
        this.ScrollToNextQuestion(questionNumber);
      }
    },
    ScrollToNextQuestion(questionNumber) {
      let questionId = "question__" + questionNumber;
      console.log(document.getElementById(questionId));
      document.getElementById(questionId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    },
    isChecked(i) {
      return this.selected[i + this.page * 4] ? true : false;
    },
    GenerateKey(i) {
      const uniqueKey =
        "Q:" +
        (i + this.page * 4) +
        " " +
        "A:" +
        this.selected[i + this.page * 4];
      console.log("uniqkey:", uniqueKey);
      return uniqueKey;
    },
  },
  data() {
    return {
      page: 0,
      cur_question: 0,
      type: undefined,
      questions: [
        {
          id: 1,
          title: "나는 필기를 해야 맘이 좀 놓인다.",
          answer: 0,
        },
        {
          id: 2,
          title: "강의시간에 졸다가 나도 모르게 잠든 적이 있다.",
          answer: 0,
        },
        {
          id: 3,
          title:
            "현재 중,고등학교 수업시간보다 대학 강의시간에\n더 집중하게된다.",
          answer: 0,
        },
        {
          id: 4,
          title: "교수님의 목소리를 멀리서 들어도 잘들린다.",
          answer: 0,
        },
        {
          id: 5,
          title: "조별과제를 하면서 스트레스 받은적이 없다.",
          answer: 0,
        },
        {
          id: 6,
          title: "나는 경쟁을 즐긴다.",
          answer: 0,
        },
        {
          id: 7,
          title:
            "회의를 하다보면 다른사람의 의견이 종종\n재미있고 유익할때가 있다.",
          answer: 0,
        },
        {
          id: 8,
          title: "조별과제를 하고나면 너무 뿌듯하다.",
          answer: 0,
        },
        {
          id: 9,
          title: "학교가는게 세상에서 제일 귀찮다.",
          answer: 0,
        },
        {
          id: 10,
          title: "비대면 수업일때가 좋았다 생각한적 있다.",
          answer: 0,
        },
        {
          id: 11,
          title:
            "친구들과 함께 수업을 몰려서 듣는거 보다도,\n혼자서 조용히 듣는게 더 좋다.",
          answer: 0,
        },
        {
          id: 12,
          title: "강의내용을 한번에 이해하기 힘들다.",
          answer: 0,
        },
        {
          id: 13,
          title: "다른 친구의 필기를 빌려본적이 있다.",
          answer: 0,
        },
        {
          id: 14,
          title: "레포트 제출보다는 시험이 좋다.",
          answer: 0,
        },
        {
          id: 15,
          title:
            "조별과제를 통해서 배운점들 보다, 사람에 대한\n안좋은 기억이 더 많다.",
          answer: 0,
        },
        {
          id: 16,
          title: "팀이 꾸려지면 종종 팀장을 자처하곤 한다.",
          answer: 0,
        },
        {
          id: 17,
          title: "온라인으로 청강할시 더 집중이 잘된다.",
          answer: 0,
        },
        {
          id: 18,
          title: "온라인일때 더 활발하게 질문하곤 한다.",
          answer: 0,
        },
        {
          id: 19,
          title:
            "강의를 고를때 주로 강의평을 굉장히 유심히\n생각한뒤 고르게된다.",
          answer: 0,
        },
        {
          id: 20,
          title: "강의를 주로 혼자듣는다.",
          answer: 0,
        },
      ],
      selected: new Array(21),
      btnMsg: [
        "다음으로 넘어가기",
        "다음으로 넘어가기",
        "거의 다왔어요!",
        "마지막이에요!",
        "결과 확인하기",
      ],
    };
  },
  computed: {
    isAllChecked: function () {
      let cnt = 0;
      for (let i = 1; i <= 4; i++) {
        if (this.selected[i + this.page * 4]) {
          cnt++;
        }
      }
      return cnt === 4 ? true : false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.survey-container {
  min-height: 100%;
  margin: 0 9%;
  display: flex;
  flex-direction: column;
}
.nav {
  position: sticky;
  top: 0;
  background-color: white;
  padding: 0 0 1.563rem 0;
}
.background-bar {
  overflow: hidden;
}
.btn-prev {
  position: absolute;
}
.indicator {
  text-align: center;
}
.question__number {
  font-size: 1.875rem;
  font-weight: 900;
  text-align: left;
  line-height: 0.9;
  letter-spacing: -0.75px;
  margin: 0 0 0.625rem 0;
}
.question__content {
  font-size: 1.063rem;
  font-weight: bold;
  text-align: left;
  line-height: 1.41;
  letter-spacing: -0.43px;
  margin: 0 0 1.313rem 0;
  white-space: pre-line;
}
.done {
  color: #afafaf;
}
.options {
  margin: 0.5rem;
}
fieldset {
  margin: 0 0 3.75rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
input[type="radio"] {
  display: none;
}
label {
  font-size: 0.813rem;
  height: 1.75rem;
  padding: 0 1.375rem;
  border: 1px solid #83b3ff;
  border-radius: 7px;
  display: flex;
  align-items: center;
}
input[type="radio"]:checked + label {
  background: #0371e8;
  color: white;
}
.btn-next {
  font-weight: 600;
  color: white;
  background-color: #0371e8;
  width: 10.875rem;
  padding: 1rem 0rem;
  border-radius: 7px;
  font-size: 0.813rem;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  margin: 0 0 6.25rem 0;
}
</style>
