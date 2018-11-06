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
@import "../../../styles/components/Toast.scss";
</style>
