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
            <label v-bind:for="'yes_' + (i + page * 4)">๊ทธ๋ ๋ค</label>
            <input
              type="radio"
              v-bind:id="'idk_' + (i + page * 4)"
              v-bind:name="i + page * 4"
              v-model="selected[i + page * 4]"
              value="0"
              @click="HandleAnswerClick"
              required
            />
            <label v-bind:for="'idk_' + (i + page * 4)">์๋ชจ๋ฅด๊ฒ ๋ค</label>
            <input
              type="radio"
              v-bind:id="'no_' + (i + page * 4)"
              v-bind:name="i + page * 4"
              v-model="selected[i + page * 4]"
              value="-1"
              @click="HandleAnswerClick"
              required
            />
            <label v-bind:for="'no_' + (i + page * 4)">์๋๋ค</label>
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
       * @param {number} start ์์ ์ธ๋ฑ์ค
       * @param {number} end ๋ ์ธ๋ฑ์ค
       * @returns {number} ํด๋น ๊ตฌ๊ฐ์ ํฉ์ ๋ฐํํ๋ค
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
      //์์ธ์ฒ๋ฆฌ
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
        //๋ง์ง๋ง ํ์ด์ง๊ฐ ์๋๋ฉด
        this.page += 1;
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      } else {
        //๋ง์ง๋ง ํ์ด์ง ๋ผ๋ฉด
        this.CalculateType();
        console.log(this.type);
        this.$router.push({ name: "๋ก๋ฉ", query: { mytype: this.type } });
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
          title: "๋๋ ํ๊ธฐ๋ฅผ ํด์ผ ๋ง์ด ์ข ๋์ธ๋ค.",
          answer: 0,
        },
        {
          id: 2,
          title: "๊ฐ์์๊ฐ์ ์กธ๋ค๊ฐ ๋๋ ๋ชจ๋ฅด๊ฒ ์ ๋  ์ ์ด ์๋ค.",
          answer: 0,
        },
        {
          id: 3,
          title:
            "ํ์ฌ ์ค,๊ณ ๋ฑํ๊ต ์์์๊ฐ๋ณด๋ค ๋ํ ๊ฐ์์๊ฐ์\n๋ ์ง์คํ๊ฒ๋๋ค.",
          answer: 0,
        },
        {
          id: 4,
          title: "๊ต์๋์ ๋ชฉ์๋ฆฌ๋ฅผ ๋ฉ๋ฆฌ์ ๋ค์ด๋ ์๋ค๋ฆฐ๋ค.",
          answer: 0,
        },
        {
          id: 5,
          title: "์กฐ๋ณ๊ณผ์ ๋ฅผ ํ๋ฉด์ ์คํธ๋ ์ค ๋ฐ์์ ์ด ์๋ค.",
          answer: 0,
        },
        {
          id: 6,
          title: "๋๋ ๊ฒฝ์์ ์ฆ๊ธด๋ค.",
          answer: 0,
        },
        {
          id: 7,
          title:
            "ํ์๋ฅผ ํ๋ค๋ณด๋ฉด ๋ค๋ฅธ์ฌ๋์ ์๊ฒฌ์ด ์ข์ข\n์ฌ๋ฏธ์๊ณ  ์ ์ตํ ๋๊ฐ ์๋ค.",
          answer: 0,
        },
        {
          id: 8,
          title: "์กฐ๋ณ๊ณผ์ ๋ฅผ ํ๊ณ ๋๋ฉด ๋๋ฌด ๋ฟ๋ฏํ๋ค.",
          answer: 0,
        },
        {
          id: 9,
          title: "ํ๊ต๊ฐ๋๊ฒ ์ธ์์์ ์ ์ผ ๊ท์ฐฎ๋ค.",
          answer: 0,
        },
        {
          id: 10,
          title: "๋น๋๋ฉด ์์์ผ๋๊ฐ ์ข์๋ค ์๊ฐํ์  ์๋ค.",
          answer: 0,
        },
        {
          id: 11,
          title:
            "์น๊ตฌ๋ค๊ณผ ํจ๊ป ์์์ ๋ชฐ๋ ค์ ๋ฃ๋๊ฑฐ ๋ณด๋ค๋,\nํผ์์ ์กฐ์ฉํ ๋ฃ๋๊ฒ ๋ ์ข๋ค.",
          answer: 0,
        },
        {
          id: 12,
          title: "๊ฐ์๋ด์ฉ์ ํ๋ฒ์ ์ดํดํ๊ธฐ ํ๋ค๋ค.",
          answer: 0,
        },
        {
          id: 13,
          title: "๋ค๋ฅธ ์น๊ตฌ์ ํ๊ธฐ๋ฅผ ๋น๋ ค๋ณธ์ ์ด ์๋ค.",
          answer: 0,
        },
        {
          id: 14,
          title: "๋ ํฌํธ ์ ์ถ๋ณด๋ค๋ ์ํ์ด ์ข๋ค.",
          answer: 0,
        },
        {
          id: 15,
          title:
            "์กฐ๋ณ๊ณผ์ ๋ฅผ ํตํด์ ๋ฐฐ์ด์ ๋ค ๋ณด๋ค, ์ฌ๋์ ๋ํ\n์์ข์ ๊ธฐ์ต์ด ๋ ๋ง๋ค.",
          answer: 0,
        },
        {
          id: 16,
          title: "ํ์ด ๊พธ๋ ค์ง๋ฉด ์ข์ข ํ์ฅ์ ์์ฒํ๊ณค ํ๋ค.",
          answer: 0,
        },
        {
          id: 17,
          title: "์จ๋ผ์ธ์ผ๋ก ์ฒญ๊ฐํ ์ ๋ ์ง์ค์ด ์๋๋ค.",
          answer: 0,
        },
        {
          id: 18,
          title: "์จ๋ผ์ธ์ผ๋ ๋ ํ๋ฐํ๊ฒ ์ง๋ฌธํ๊ณค ํ๋ค.",
          answer: 0,
        },
        {
          id: 19,
          title:
            "๊ฐ์๋ฅผ ๊ณ ๋ฅผ๋ ์ฃผ๋ก ๊ฐ์ํ์ ๊ต์ฅํ ์ ์ฌํ\n์๊ฐํ๋ค ๊ณ ๋ฅด๊ฒ๋๋ค.",
          answer: 0,
        },
        {
          id: 20,
          title: "๊ฐ์๋ฅผ ์ฃผ๋ก ํผ์๋ฃ๋๋ค.",
          answer: 0,
        },
      ],
      selected: new Array(21),
      btnMsg: [
        "๋ค์์ผ๋ก ๋์ด๊ฐ๊ธฐ",
        "๋ค์์ผ๋ก ๋์ด๊ฐ๊ธฐ",
        "๊ฑฐ์ ๋ค์์ด์!",
        "๋ง์ง๋ง์ด์์!",
        "๊ฒฐ๊ณผ ํ์ธํ๊ธฐ",
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
