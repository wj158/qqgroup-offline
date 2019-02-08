import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/fontIcon/iconfont.css";

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI, {
    size: "small",
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
