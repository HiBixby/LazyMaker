import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import Meta from "vue-meta";
import "./index.css";

const myApp = createApp(App);
myApp.use(router,Meta,{attribute:'data-vue-meta'});
myApp.mount("#app");
