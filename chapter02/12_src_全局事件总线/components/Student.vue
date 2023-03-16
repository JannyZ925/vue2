<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名交给School</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: '张姣妮',
      sex: '女',
      age: '21',
    }
  },
  methods: {
    sendStudentName(){
      this.$bus.$emit('hello', this.name)
    }
  }
}
</script>


<style scoped lang="less">
.student{
  background-color: palegoldenrod;

  button{
    margin: 0 5px;
  }
}
</style>
