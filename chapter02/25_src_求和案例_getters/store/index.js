// 该文件用于创建Vuex中最为核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备state -- 用于存储数据
const state = {
    sum: 0
}

// 准备actions -- 用于响应组件中的动作
const actions = {
    addWhenSumIsOdd(context, value){
        if(context.state.sum % 2){
            context.commit('ADD', value)
        }
    },
    addForAMoment(context, value){
        setTimeout(()=>{
            context.commit('ADD', value)
        }, 1000)
    }
}

// 准备mutations -- 用于操作数据(state)
const mutations = {
    ADD(state, value){
        state.sum += value
    },
    SUB(state, value){
        state.sum -= value
    },
}

// 准备getters -- 用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}


// 创建并暴露store
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})