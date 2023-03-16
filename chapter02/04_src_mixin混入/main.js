import Vue from 'vue'
import App from './App'

/*// 引入mixin
import {mixin} from "@/mixin";
import {mixin2} from "@/mixin";
// 全局注册mixin
Vue.mixin(mixin)
Vue.mixin(mixin2)*/

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h=>h(App)
})