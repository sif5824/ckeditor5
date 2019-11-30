import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from './axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(CKEditor)
Vue.use(ElementUI)
Vue.prototype.request = request

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
