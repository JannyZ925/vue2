export default {
    namespaced: true,
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state){
            return state.sum * 10
        }
    },
    actions: {
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
    },
    mutations: {
        ADD(state, value){
            state.sum += value
        },
        SUB(state, value){
            state.sum -= value
        },
    }
}