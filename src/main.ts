import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import createRouter from "./router";

import "./style.css";

createApp(App).use(createPinia()).use(createRouter).mount("#app");
