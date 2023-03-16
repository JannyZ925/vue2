/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, // 关闭语法检查

  // 开启代理服务器（方法一）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  // 开启代理服务器（方法二）
  devServer: {
    proxy: {
      '/api': { // 匹配所有以'api‘开头的请求路径
        target: 'http://localhost:5000', // 代理目标的基础路径
        pathRewrite: {'^/api': ''},
        changeOrigin: true, // 用于控制请求头中的host值，默认为true
        ws: true // 用于支持websocket
      },
      '/demo': {
        target: 'http://localhost:5001', // 代理目标的基础路径
        pathRewrite: {'^/demo': ''},
        changeOrigin: true, // 用于控制请求头中的host值
        ws: true // 用于支持websocket
      }
    }
  }
}