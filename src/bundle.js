import Toast from "./packages/Toast/index";
import BackTop from "./packages/backTop/index";
const version = '1.0.0';
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
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
 Toast,
 version,
 BackTop
}
// export default Toast
