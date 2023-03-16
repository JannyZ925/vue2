<template>
  <div class="demo">
    <h1 v-text="msg" ref="welcome"></h1>
    <button @click="showDOM" ref="btn">点我输出所有元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from "./components/School";

export default {
  name: "App",
  components: {
    School
  },
  data() {
    return {
      msg: '欢迎来到尚硅谷学习'
    }
  },
  methods: {
    showDOM(){
      console.log(this.$refs.welcome) // 真实DOM元素
      console.log(this.$refs.btn) // 真实DOM元素
      console.log(this.$refs.sch) // School组建的实例对象
    }
  }
}
</script>

<style scoped>
.demo{
  background-color: lightsteelblue;
}
</style>