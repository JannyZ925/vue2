<template>
  <div class="app">
    <h2>你好，{{studentName}}</h2>
<!--    通过父组件给子组件传递函数类型的props实现子给父传递数据-->
    <School :getSchoolName="getSchoolName"/>
    <hr>
<!--    通过父组件给子组件绑定一个自定义事件实现子给父传递数据(第一种写法：使用 @ 或 v-on)-->
<!--    @demo 触发demo事件，相当于@click 会触发click事件 -->
   <!-- <Student v-on:atguigu="getStudentName" @demo="m1"/> -->

<!--    通过父组件给子组件绑定一个自定义事件实现子给父传递数据(第二种写法：使用 ref)-->
    <Student ref="student" @click.native="show"/>
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
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name){
      console.log('收到了学校名称：' + name)
    },
    // getStudentName(name){
    //   this.studentName = name
    //   console.log('收到了学生姓名：' + name)
    // },
    m1(){
      console.log('demo事件被触发了')
    },
    show(){
      alert(123)
    }
  },
  mounted() {
    this.$refs.student.$on('atguigu', (name)=>{
      console.log(this) // 如果写成普通函数，this 是 Student
      this.studentName = name
      console.log('收到了学生姓名：' + name)
    })
  }
}
</script>

<style scoped>
.app{
  background-color: rgb(211, 206, 206);
  padding: 5px;
}
</style>


