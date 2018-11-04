import Vue from 'vue';
import App from './App.vue'
// import Toast from "./packages/Toast/index.js";
// import backTop from "./packages/backTop/index.js";
import {Toast,BackTop} from "./bundle";
Vue.config.productionTip = false;
Vue.component(BackTop.name,BackTop);
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
