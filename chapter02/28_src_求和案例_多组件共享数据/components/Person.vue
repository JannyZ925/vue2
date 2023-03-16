<template>
<div style="background-color:lightsteelblue;">
  <h2>人员列表</h2>
  <input type="text" v-model="name">
  <button @click="addPerson">添加</button>
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
      return this.$store.state.personList
    },
    sum(){
      return this.$store.state.sum
    }
  },
  methods: {
    addPerson(){
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('ADD_PERSON', personObj)
    }
  }
}
</script>

<style scoped>

</style>