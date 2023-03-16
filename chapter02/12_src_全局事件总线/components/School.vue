<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  mounted() {
    this.$bus.$on('hello', (name)=>{
      console.log('我是School组件，收到了学生名：' + name)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped lang="less">
.school{
  background-color: lightsteelblue;

  h2{
    color: brown;
  }
}
</style>
