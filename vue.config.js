module.exports = {
  productionSourceMap: false,//生产环境是否生成 sourceMap 文件
  runtimeCompiler: true,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
       //vue源码不被打包进去
      config.externals={
        'vue': 'Vue'
      }
    } else {
      // 为开发环境修改配置...
      config.resolve={
        alias: {
          'vue$': 'vue/dist/vue.esm.js' 
        }
      }
    }
  },
  devServer: {
    //反向代理设置
    proxy: {
      '/system': {
        target: 'https://www.inswindows.com',
        ws: true,
        changeOrigin: true
      },
    }
  },
  css:{
    extract:false,//是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
  }
}