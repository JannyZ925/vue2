<template>
<div>
  <ul>
    <li>news1 <input type="text"></li>
    <li>news2 <input type="text"></li>
    <li>news3 <input type="text"></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log('News组件即将被销毁')
  }
}
</script>

<style scoped lang="less">
ul{
  width: 230px;
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