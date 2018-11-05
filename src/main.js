import Vue from 'vue';
import App from './App.vue';
import {Toast,BackTop} from "./bundle";
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
// import 'vue-ydui/dist/ydui.rem.css';
// /* 使用px：import 'vue-ydui/dist/ydui.px.css'; */
// Vue.use(YDUI);
// console.log(YDUI)
Vue.config.productionTip = false;
// console.log(MintUI)
// console.log(YYUI)
// Vue.use(YYUI)
Vue.component(BackTop.name,BackTop);
// Vue.prototype.$dialog = {
//   toast: YDUI.Toast,
// };
// const toast=(msg)=>{
//    Vue.prototype.$toast({
//     message:msg,
//     duration:2000,
//     position:"bottom"
//   })
// }
Vue.prototype.$toast=Toast;
//runtime
new Vue({
  render: h => h(App)
}).$mount('#app')
