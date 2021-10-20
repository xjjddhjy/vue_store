import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import proxy from './proxy/index'
import VueLazyLoad from 'vue-lazyload'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
// 单独引用elementUI的Notification 通知组件给main.js用
import {Notification} from 'element-ui'
Vue.use(ElementUI);
Vue.use(proxy)
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
