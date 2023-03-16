<template>
<div>
  <button @click="getStudentsInfo">点击获取学生信息</button>
  <br><br>
  <button @click="getCarsInfo">点击获取汽车信息</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudentsInfo(){
      axios.get('http://localhost:8080/api/students')
          .then((response)=>{
            console.log('请求成功了', response.data)
          })
          .catch((error)=>{
            console.log('请求失败了', error.message)
          })
    },
    getCarsInfo(){
      axios.get('http://localhost:8080/demo/cars')
          .then((response)=>{
            console.log('请求成功了', response.data)
          })
          .catch((error)=>{
            console.log('请求失败了', error.message)
          })
    }
  }
}
</script>

<style scoped>

</style>