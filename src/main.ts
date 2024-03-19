import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import { createApp } from "vue";

import App from "@/App.vue";
import { router } from "@/router";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App).use(router).use(pinia);
router.isReady().then(() => app.mount("#app"));
