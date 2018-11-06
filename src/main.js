import Vue from 'vue';
import App from './App.vue';
// import {Toast,BackTop} from "./bundle";
import YYUI from "./bundle"
Vue.config.productionTip = false;
// Vue.component(BackTop.name,BackTop);
Vue.use(YYUI);
//runtime
new Vue({
  render: h => h(App)
}).$mount('#app')
