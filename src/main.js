import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { Quasar, Notify, Dialog } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, { plugins: { Notify, Dialog } });

app.mount("#app");
