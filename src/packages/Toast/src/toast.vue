<template>
  <transition :name="cssPrefix+'-toast-pop'">
    <div v-show="visible"
         :class="[cssPrefix+'-toast',customClass]"
         style="padding:10px">
      <span class="toast-text">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import mixin from "../../../mixins/index.js"
export default {
  props: {
    message: String,
    position: {
      type: String,
      default: 'middle'
    }
  },
  mixins: [mixin],
  data () {
    return {
      visible: false
    };
  },
  methods: {
    handleClose () {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
  },
  computed: {

    customClass () {
      var classes = [];
      switch (this.position) {
        case 'top':
          classes.push('is-placetop');
          break;
        case 'bottom':
          classes.push('is-placebottom');
          break;
        default:
          classes.push('is-placemiddle');
      }
      classes.push(this.className);
      return classes.join(' ');
    }
  }
};
</script>
<style lang="scss">
@import '../../../styles/common/variables.scss';
.#{$css-prefix} {
  &-toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1;
    transition: opacity 0.3s linear;
    &.is-placebottom {
      bottom: 50px;
      left: 50%;
      transform: translate(-50%);
    }

    &.is-placemiddle {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.is-placetop {
      top: 50px;
      left: 50%;
      transform: translate(-50%);
    }
    .toast-text {
      font-size: 14px;
      display: block;
      text-align: center;
    }
  }
  &-toast-pop-enter,
  &-toast-pop-leave-active {
    opacity: 0;
  }
}
</style>
