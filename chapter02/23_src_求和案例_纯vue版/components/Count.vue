<template>
<div>
  <h2>当前求和为：{{sum}}</h2>
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
      sum: 0,
      num: 1
    }
  },
  methods: {
    add(){
      this.sum += this.num
    },
    sub(){
      this.sum -= this.num
    },
    addWhenSumIsOdd(){
      if(this.sum % 2 !== 0){
        this.sum += this.num
      }
    },
    addForAMoment(){
      setTimeout(()=>{
        this.sum += this.num
      }, 1000)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>