module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' 
      }
    }
  }
}