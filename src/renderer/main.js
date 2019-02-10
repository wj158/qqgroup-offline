import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/fontIcon/iconfont.css";
import coms from "./components";
import { remote } from "electron";
const API = remote.getGlobal("API");

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$api = API;

Vue.use(ElementUI, {
    size: "small",
});
Vue.use(coms);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
