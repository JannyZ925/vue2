<template>
<div>
  <ul>
    <li>message1</li>
    <li>message2</li>
    <li>message3</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Messages"
}
</script>

<style scoped lang="less">
ul{
  width: 200px;
  padding: 0;
  li{
    text-align: center;
    list-style: none;
    color: lightsteelblue;
    line-height: 30px;
  }
}
</style>