<template>
  <div class="loader-container">
    <div class="loader-img">
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
          stroke="#0371e8"
          stroke-width="3"
          stroke-linecap="round"
          stroke-miterlimit="15"
          stroke-dasharray="8"
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
    <div class="loader-text">분석중...</div>
  </div>
</template>

<script>
export default {
  name: "LoaderPage",
  props: {},
  created() {
    console.log(this.$route.query.mytype);
    setTimeout(() => {
      this.$router.push({
        name: "결과",
        params: { mytype: this.$route.query.mytype },
      });
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader-container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loader-img {
  width: 7.063rem;
  height: 7.063rem;
}
.loader-text {
  width: 4.125rem;
  height: 1.5rem;
  margin-top: 1.438rem;
  font-size: 1.25rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: -0.5px;
  text-align: center;
}
</style>
