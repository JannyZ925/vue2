<template>
  <ul>
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息内容：{{$route.params.context}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style scoped lang="less">
ul {
  width: 200px;

  li {
    list-style: none;
    line-height: 30px;
  }
}
</style>