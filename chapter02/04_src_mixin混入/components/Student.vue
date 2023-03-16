
<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
// 引入一个mixin
import {mixin} from "../mixin";

export default {
  name: "Student",
  data(){
    return{
      name: '张姣妮',
      sex: '女',
      age: 21
    }
  },
  mixins: [mixin]
}
</script>
