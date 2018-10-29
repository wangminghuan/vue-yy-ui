import Vue from 'vue';
//vue-loader升级到了13.0后导致默认启用的esModule，所以用require必须加上 .default
//或也可以通过inmport引用，将模块输出内容作为变量传到extend的参数中
const ToastConstructor = Vue.extend(require('./toast.vue').default);

let getAnInstance = () => {
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};
ToastConstructor.prototype.close = function() {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
};
let Toast = (options = {}) => {
    //位运算只对整数起作用，如果一个运算数不是整数，会自动转为整数后再运行
    // 能够转化为false的number类型的只有0 和 NaN,其余的都会被转化为true,包括负数
    // 对于浮点数,~~value可以代替parseInt(value),而且效率更高些
  let _duration = ~~options.duration;
  let duration  = _duration>0?_duration: 3000;
  let instance  = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';

  document.body.appendChild(instance.$el);
  Vue.nextTick(function() {
    instance.visible = true;
    //移除 重复绑定的事件
    instance.$el.removeEventListener('transitionend', removeDom);
    instance.timer = setTimeout(function() {
      if (instance.closed) return;
      instance.close();
    }, duration)
  });
  return instance;
};

export default Toast;