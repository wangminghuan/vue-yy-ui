// import Vue from "vue";
// import mixin from "./mixins/index";
import "./styles/base.scss";
import Toast from "./packages/Toast/index";
import BackTop from "./packages/backTop/index";
const Version = '1.0.0';
// Vue.mixin(mixin)
BackTop.install = function (Vue) {
  Vue.component(BackTop.name, BackTop)
}

const components = [
  BackTop
]

const install = (Vue, opts = {})=> {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast=Toast;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  Toast,
  Version,
  BackTop
 };
export default {
  install
 } ;
