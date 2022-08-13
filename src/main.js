import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/css.less'
import './assets/font/iconfont.css'
import './assets/font1/iconfont.css'
import './assets/font2/iconfont.css'
import '../public/static/map/world.js'
import '../public/static/map/china.js'
Vue.prototype.$echarts = window.echarts

// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
