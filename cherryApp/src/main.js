// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
//import { Button } from 'mint-ui'



Vue.config.productionTip = false
//Vue.component(Button.name, Button)
Vue.use(MintUi)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
