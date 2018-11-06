import Toast from "./components/Toast/index";
import BackTop from "./components/BackTop/index";
const Version = '1.0.0';
BackTop.install = function (Vue) {
  Vue.component(BackTop.name, BackTop)
}

const components = [
  BackTop
]

const install = (Vue)=> {
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
