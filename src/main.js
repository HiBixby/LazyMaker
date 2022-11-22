import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import { createMetaManager } from "vue-meta";
import { plugin as vueMetaPlugin } from "vue-meta";
import "./index.css";

const myApp = createApp(App);
myApp.use(router);
myApp.use(vueMetaPlugin);
myApp.use(createMetaManager(false, { meta: { tag: "meta", nameless: true } }));
myApp.mount("#app");
