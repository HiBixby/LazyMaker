<template>
  <div class="min-h-full mx-10 flex flex-col">
    <!-- progress bar -->
    <div class="progress-bar py-10 flex-none">
      <div class="w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
        <div
          class="bg-blue-600 h-3.5 rounded-full transition-all"
          :style="{ width: (pointer / (questions.length - 1)) * 100 + '%' }"
        ></div>
      </div>
    </div>
    <!-- prev button -->
    <div class="text-left flex-none">
      <button @click="ShowPrevQuestion()" class="text-2xl text-gray-500">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>
    <!-- Question -->
    <div class="flex flex-col flex-1 justify-center">
      <div class="text-3xl font-black">Q{{ pointer + 1 }}</div>
      <div class="text-2xl">
        {{ questions[pointer].title }}
      </div>
      <!-- option -->
      <div class="options">
        <button
          v-for="option in questions[pointer].options"
          v-bind:key="option"
          @click="ShowNextQuestion()"
          class="border-2 rounded-lg my-5 p-5 block w-full min-h-[8rem] break-words"
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
        this.$router.push("/loader");
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
          title:
            "아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주아주긴질문",
          options: [
            "최소 높이 테스트",
            "아주 긴 문장 테스트 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
          ],
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
