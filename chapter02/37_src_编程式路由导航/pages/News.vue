<template>
<div>
  <ul>
    <li><a href="">news1</a></li>
    <li><a href="">news2</a></li>
    <li><a href="">news3</a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "News"
}
</script>

<style scoped lang="less">
ul{
  width: 200px;
  padding: 0;
  li{
    line-height: 30px;
    list-style: none;
    text-align: center;
    a{
      text-decoration: none;
      color: lightsteelblue;
    }
  }
}
</style>