// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入Element-ui
/* import './plugins/element.js' */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
