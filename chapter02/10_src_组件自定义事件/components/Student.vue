<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <h2>number = {{number}}</h2>
    <button @click="add">number++</button>
    <button @click="sendStudentName">将学生姓名发送给App</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁Student实例对象</button>
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
      number: 0
    }
  },
  methods: {
    sendStudentName(){
      // 绑定一个自定义事件
      this.$emit('atguigu', this.name)
      this.$emit('demo')
    },
    unbind() {
      // 解绑一个事件
      this.$off('atguigu')

      // 解绑多个事件
      // this.$off(['atguigu', 'demo'])

      // 解绑所有事件
      // this.$off()
    },
    death(){
      // 销毁当前Student组件实例，销毁后Student实例的自定义事件全部不奏效
      this.$destroy()
    },
    add(){
      console.log('add被调用了~~')
      this.number++
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
