<template>
  <div class="min-h-screen mx-10 flex flex-col">
    <!-- progress bar -->
    <div class="progress-bar py-5">
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full transition-all" :style="{'width': ((pointer+1)/questions.length)*100+'%'}"></div>
      </div>
    </div>
    <!-- prev button -->
    <div class="">
      <button @click="ShowPrevQuestion()" class="text-3xl">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>
    <!-- Question -->
    <div class="flex flex-col">
      <div class="text-3xl font-bold">Q.{{ pointer + 1 }}</div>
      <div class="text-2xl">
        {{ questions[pointer].title }}
      </div>
      <!-- option -->
      <div class="options">
        <button
          v-for="option in questions[pointer].options"
          v-bind:key="option"
          @click="ShowNextQuestion()"
          class="border-2 rounded-md my-5 block w-full"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionsPage",
  props: {},
  methods: {
    ShowNextQuestion() {
      if (this.pointer < this.questions.length - 1) {
        this.pointer += 1;
      } else {
         this.$router.push('/result');
      }
    },
    ShowPrevQuestion() {
      if (this.pointer) {
        this.pointer -= 1;
      } else {
        history.back();
      }
    },
  },
  data() {
    return {
      pointer: 0,
      questions: [
        {
          id: 1,
          title: "질문1",
          options: ["질문1의 A", "질문1의 B"],
        },
        {
          id: 2,
          title: "질문2",
          options: ["질문2의 A", "질문2의 B"],
        },
        {
          id: 3,
          title: "질문3",
          options: ["질문3의 A", "질문3의 B"],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
