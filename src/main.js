import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});
