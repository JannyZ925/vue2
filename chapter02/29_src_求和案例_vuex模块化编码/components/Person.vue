<template>
<div style="background-color:lightsteelblue;">
  <h2>人员列表</h2>
  <h2>第一个人的名字是：{{firstPersonName}}</h2>
  <input type="text" v-model="name">
  <button @click="addPerson">添加</button>
  <button @click="addWang">添加一个姓王的人</button>
  <button @click="addPersonServer">添加一个人，名字随机</button>
  <ul>
    <li v-for="person in personList" :key="person.id">
      {{person.name}}
    </li>
  </ul>
  <h2 style="color: brown">Count组件求和为：{{sum}}</h2>
</div>
</template>

<script>
import {nanoid} from "nanoid";
export default {
  name: "Person",
  data(){
    return{
      name,
    }
  },
  computed: {
    personList(){
      return this.$store.state.person.personList
    },
    sum(){
      return this.$store.state.count.sum
    },
    firstPersonName(){
      return this.$store.getters["person/firstPersonName"]
    }
  },
  methods: {
    addPerson(){
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('person/ADD_PERSON', personObj)
      this.name = ''
    },
    addWang(){
      const personObj = {id: nanoid(), name: this.name}
      this.$store.dispatch("person/addWang", personObj)
      this.name = ''
    },
    addPersonServer(){
      this.$store.dispatch('person/addPersonServer')
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>