<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{MyAge+1}}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return{
      msg: '我是尚硅谷的一个学生',
      MyAge: this.age
    }
  },

  // 第一种方式：只接收
  props: ['name', 'sex', 'age']


  /*// 第二种方式：限制类型
  props: {
    name: String,
    sex: String,
    age: Number
  }*/


  /*props: {
    name: {
      type: String,
      required: true
    },
    sex: {
      type: String, // 限制类型
      required: false, //限制必要性
      default: '女' // 限制默认值
    },
    age: {
      type: Number,
      required: true
    }
  }*/
}
</script>
