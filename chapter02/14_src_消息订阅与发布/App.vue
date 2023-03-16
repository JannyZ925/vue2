<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: {
    School,
    Student
  },
  data() {
    return{
      msg: '你好'
    }
  }
}
</script>

<style scoped>
.app{
  background-color: rgb(211, 206, 206);
  padding: 5px;
}
</style>


