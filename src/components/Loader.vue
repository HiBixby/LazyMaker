<template>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="w-36">
      <svg
        version="1.1"
        id="L1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xml:space="preserve"
      >
        <circle
          fill="none"
          stroke="#000"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="15"
          stroke-dasharray="10,8"
          cx="50"
          cy="50"
          r="47"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="3s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
    <div class="my-10 text-2xl font-bold">취향분석중...</div>
  </div>
</template>

<script>
export default {
  name: "LoaderPage",
  props: {},
  created() {
    setTimeout(() => {
      this.$router.push("/result");
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
