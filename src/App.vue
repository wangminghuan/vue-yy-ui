<template>
  <div id="app">
    <button @click="handleClick">点我展示toast</button><br>
    <button @click="handleGetData">点我获取异步数据</button>
        <back-top></back-top>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$toast({
        message: "Hello World",
        duration: 2000,
        position: "bottom"
      })
    },
    handleGetData () {
      this.ajax({
        url: "/system/version/getAppVersion?zc_version=d5cc4c07e9241f5347e90ce0518a15bc",
        success:(res)=> {
          const _data = JSON.parse(res);
          this.$toast({
            message: _data.data.av_create_date,
            duration: 2000,
            position: "middle"
          })
        },
        error: function () { }
      })
    },
    ajax (opts) {
      var defaults = {
        method: "GET",
        url: "",
        data: '',
        async: true,
        cache: true,
        contentType: 'application/x-www-form-urlencoded',
        success: function () { },
        error: function () { }
      };
      for (var key in opts) {
        defaults[key] = opts[key]
      }

      //处理用户输入的data数据

      if (typeof defaults.data == 'object' && Object.prototype.toString.call(defaults.data) != "[object Array]") {
        var dataStr = "";
        for (var k in defaults.data) {
          dataStr += encodeURIComponent(k) + "=" + encodeURIComponent(defaults.data[k]) + "&"
        }
        defaults.data = dataStr.substring(0, dataStr.length - 1)
      }
      //将请求方式改为大写
      defaults.method = defaults.method.toUpperCase();

      //设置cache ,cache为false时设置随机数，防止缓存
      defaults.cache = defaults.cache ? "" : "&" + (new Date()).getTime();

      //GET方式下将data拼接到url中进行传递
      if (defaults.method == "GET" && (defaults.data || defaults.cache)) {
        defaults.url += "?" + defaults.data + defaults.cache;
      }

      //1. 创建XMLHttpRequest对象
      var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

      //2. 同服务器建立联系，open方法
      xhr.open(defaults.method, defaults.url, defaults.async)

      //3. 向服务器发送请求，send方法
      if (defaults.method == "GET") {
        xhr.send()
      } else {
        xhr.setRequestHeader('Content-Type', defaults.contentType);
        //提交的数据格式，默认application/x-www-form-urlencoded
        xhr.send(defaults.data);
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            defaults.success(JSON.parse(JSON.stringify(xhr.responseText)))
          } else {
            defaults.error(xhr.status)
          }
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import './styles/base.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 2000px;
}
</style>
