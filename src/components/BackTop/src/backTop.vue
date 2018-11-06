
<template>
  <div :class="[cssPrefix+'-back-top']"
       @click="handleClick">
    <span :class="isShow? 'show': 'hide'"></span>
  </div>
</template>

<script>
import mixin from "../../../mixins/index.js"
export default {
  name: "back-top",
  mixins: [mixin],
  data () {
    return {
      isShow: false,
      isAutoScroll: false
    };
  },
  methods: {
    getScrollTop () {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return parseFloat(scrollTop);
    },
    setScrollTop (height) {
      if (document.documentElement && document.documentElement.scrollTop) {
        document.documentElement.scrollTop = height;
      } else if (document.body) {
        document.body.scrollTop = height;
      }
    },
    getClientHeight () {
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight =
          document.body.clientHeight < document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      } else {
        clientHeight =
          document.body.clientHeight > document.documentElement.clientHeight
            ? document.body.clientHeight
            : document.documentElement.clientHeight;
      }
      return parseFloat(clientHeight);
    },
    handleClick () {
      this.isShow = false;
      this.isAutoScroll = true;
      clearInterval(timer);
      let timer = setInterval(() => {
        let now = this.getScrollTop(); //滚动条竖直距离
        let speed = Math.floor((0 - now) / 5);
        if (now == 0) {
          clearInterval(timer);
          this.isAutoScroll = false;
        }
        this.setScrollTop(now + speed); //标准模式下的浏览器
      }, 30);
    },
    handleScroll () {
      if (
        !this.isShow &&
        !this.isAutoScroll &&
        1 * this.getClientHeight() < this.getScrollTop()
      ) {
        this.isShow = true;
      }
      if (this.isShow && 1 * this.getClientHeight() > this.getScrollTop()) {
        this.isShow = false;
      }
    }
  },
  mounted () {
    window.addEventListener("scroll", this.handleScroll);
  },
  destoryed () {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "../../../styles/components/BackTop.scss";
</style>