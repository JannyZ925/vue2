<template>
<div class="category">
  <h2>{{ title }}分类</h2>
<!--  定义一个插槽（挖个坑，等组件的使用者进行填充）-->
  <slot>
<!--    默认内容，当使用者没有传递具体结构时出现-->
    我是默认内容
  </slot>
</div>
</template>

<script>
export default {
  name: "Category",
  props: ['title']
}
</script>

<style scoped lang="less">
.category{
  width: 200px;
  height: 300px;
  background-color: lightsteelblue;
  h2{
    background-color: orange;
    text-align: center;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
}
</style>