import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 样式初始化
import "@/assets/css/common/reset.css"
import "@/assets/css/common/initialize.min.css"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
