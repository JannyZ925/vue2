<template>
  <div>
    <h2 @click="hello">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="age">
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: '张姣妮',
      sex: '女',
      age: '21'
    }
  },
}
</script>
