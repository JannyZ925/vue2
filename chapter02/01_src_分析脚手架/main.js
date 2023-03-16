/*
* 关于不同版本的Vue
*
*   1、vue.js 与 vue.runtime.js 的区别
*     ①vue.js是完整版的Vue，包含：核心功能+模板解析器
*     ②vue.runtime.xxx.js是运行版本的Vue，只包含核心功能，没有模板解析器
*
*   2、因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
* */


/*
  该文件是整个项目的入口文件
*/

// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
  render: h => h(App)

  /*render(createElement){
    return createElement(App)
  }*/
}).$mount('#app')

/*// 创建Vue的实例对象
new Vue({
    el: '#app',
    template: `
      <div>
      <App></App>
      </div>`,
    // 将App组件放入容器中
    components: {
        App
    }
})*/


