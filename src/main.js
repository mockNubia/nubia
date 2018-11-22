// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//注册路由
import router from './router'
//weui样式
import 'weui-vue/weui.css'
//引入animate.css
import animate from 'animate.css'
//rem计算
import './modules/rem'
Vue.config.productionTip = false
//注册状态管理
import store from './store'
/* eslint-disable no-new */
import mintUi from 'mint-ui'
//引入axios
import Axios from 'axios'
//挂载到vue上
Vue.prototype.$Axios = Axios
Vue.use(animate)
Vue.use(mintUi)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
