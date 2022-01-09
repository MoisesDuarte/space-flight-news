import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEraser,
  faPen,
  faPlusCircle,
  faSearch,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import { faCircle, faMoon } from "@fortawesome/free-regular-svg-icons";

library.add(faEraser);
library.add(faPen);
library.add(faPlusCircle);
library.add(faSearch);
library.add(faRocket);

library.add(faCircle);
library.add(faMoon);

export { FontAwesomeIcon, FontAwesomeLayers };
