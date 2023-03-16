<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息内容：{{context}}</li>
<!--    <h2>id:{{id}},context:{{context}}</h2>-->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ['id', 'context'],
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