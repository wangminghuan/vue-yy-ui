import Vue from 'vue';
import App from './App.vue'
import Toast from "./packages/Toast/index.js";
Vue.config.productionTip = false;
const toast=(msg)=>{
  Toast({
    message:msg,
    duration:2000,
    position:"bottom"
    
  })
}
Vue.prototype.$toast=toast;
//runtime
new Vue({
  render: h => h(App)
}).$mount('#app')
