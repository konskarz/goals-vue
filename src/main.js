import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Quasar, Notify } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, { plugins: { Notify } });

app.mount("#app");
