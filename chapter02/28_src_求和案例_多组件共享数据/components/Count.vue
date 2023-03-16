<template>
<div style="background-color:palegoldenrod;">
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
  <h2 style="color: brown">Person组件总人数为：{{personList.length}}</h2>
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
    ...mapState({sum: 'sum', school: 'school', subject: 'subject', personList: 'personList'}),

    // 借助mapGetters生成计算属性，从getters中获取数据--对象写法
    ...mapGetters({bigSum: 'bigSum'}),
  },
  methods: {
    // 借助mapMutations生成对应方法，方法中会调用commit联系mutations(对象写法)
    ...mapMutations({add: 'ADD', sub: 'SUB'}),

    // 借助mapActions生成对应方法，方法中会调用dispatch联系actions(对象写法)
    ...mapActions({addWhenSumIsOdd: 'addWhenSumIsOdd', addForAMoment: 'addForAMoment'}),
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>