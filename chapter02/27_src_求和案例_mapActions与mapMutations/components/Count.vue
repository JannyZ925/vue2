<template>
<div>
  <h2>当前求和为：{{sum}}</h2>
  <h2>放大十倍后的和为：{{bigSum}}</h2>
  <h2>我在{{school}}学习{{subject}}</h2>
  <select v-model.number="num">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add(num)">+</button>
  <button @click="sub(num)">-</button>
  <button @click="addWhenSumIsOdd(num)">当前和为奇数再加</button>
  <button @click="addForAMoment(num)">等一等再加</button>
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "Count",
  data(){
    return{
      num: 1
    }
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据--对象写法
    ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
    // 借助mapState生成计算属性，从state中读取数据--数组写法
    // ...mapState(['sum', 'school', 'subject']),

    // 借助mapGetters生成计算属性，从getters中获取数据--对象写法
    ...mapGetters({bigSum: 'bigSum'}),
    // 借助mapGetters生成计算属性，从getters中获取数据--数组写法
    // ...mapGetters(['bigSum'])
  },
  methods: {
    // add(){
    //   this.$store.commit('ADD', this.num)
    // },
    // sub(){
    //   this.$store.commit('SUB', this.num)
    // },
    // addWhenSumIsOdd(){
    //   this.$store.dispatch('addWhenSumIsOdd', this.num)
    // },
    // addForAMoment(){
    //   this.$store.dispatch('addForAMoment', this.num)
    // }

    // 借助mapMutations生成对应方法，方法中会调用commit联系mutations(对象写法)
    ...mapMutations({add: 'ADD', sub: 'SUB'}),
    // 当方法名和mutations中的方法名一致时可以用数组写法
    // ...mapMutations('ADD', 'SUB'),

    // 借助mapActions生成对应方法，方法中会调用dispatch联系actions(对象写法)
    ...mapActions({addWhenSumIsOdd: 'addWhenSumIsOdd', addForAMoment: 'addForAMoment'}),
    // 当方法名和actions中的方法名一致时可以用数组写法
    // ...mapActions(['addWhenSumIsOdd', 'addForAMoment'])
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>