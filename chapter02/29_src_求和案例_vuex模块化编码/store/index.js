// 该文件用于创建Vuex中最为核心的store

import count from "@/store/count";
import person from "@/store/person";

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)


// 创建并暴露store
export default new Vuex.Store({
        modules: {
            count,
            person
        }
    }
)