<template>
  <div class="category">
    <h2>{{ title }}分类</h2>
    <!--  定义一个插槽（挖个坑，等组件的使用者进行填充）-->
    <slot name="center">
      <!--    默认内容，当使用者没有传递具体结构时出现-->
      我是默认内容
    </slot>
    <slot name="footer"></slot>
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

  h2, h3{
    text-align: center;
  }
  h2{
    background-color: orange;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
  .links{
    display: flex;
    justify-content: space-around;
  }
}
</style>