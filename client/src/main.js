import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import FontAwesomeIcon from "./utilities/fontawesome";

createApp(App).component("fa-icon", FontAwesomeIcon).use(router).mount("#app");
