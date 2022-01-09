import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { FontAwesomeLayers, FontAwesomeIcon } from "./utilities/fontawesome";

createApp(App)
  .component("fa-layers", FontAwesomeLayers)
  .component("fa-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
