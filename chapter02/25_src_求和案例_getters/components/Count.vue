<template>
<div>
  <h2>当前求和为：{{$store.state.sum}}</h2>
  <h2>放大十倍后的和为：{{$store.getters.bigSum}}</h2>
  <select v-model.number="num">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <button @click="addWhenSumIsOdd">当前和为奇数再加</button>
  <button @click="addForAMoment">等一等再加</button>
</div>
</template>

<script>
export default {
  name: "Count",
  data(){
    return{
      num: 1
    }
  },
  methods: {
    add(){
      this.$store.commit('ADD', this.num)
    },
    sub(){
      this.$store.commit('SUB', this.num)
    },
    addWhenSumIsOdd(){
      this.$store.dispatch('addWhenSumIsOdd', this.num)
    },
    addForAMoment(){
      this.$store.dispatch('addForAMoment', this.num)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>