<template>
  <div id="app" >
    <button @click="handleClick">点我展示toast</button>
    <back-top></back-top>
  </div>
</template>

<script>

export default {
  methods:{
    handleClick(){
      this.$toast("hello world")
    }
  }
}
</script>

<style lang="scss">
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
