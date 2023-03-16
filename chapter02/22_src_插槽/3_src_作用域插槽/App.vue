<template>
  <div class="categoryList">

    <Category title="游戏">
<!--      这里atguigu是Category传过来的数据，是一个对象，通过atguigu.games可以收到传递过来的games-->
      <template scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">
            {{g}}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
<!--      这里是将games从atguigu中解构赋值-->
      <template scope="{games}">
        <ol>
          <li v-for="(g, index) in games" :key="index">
            {{g}}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="{games}">
          <h4 v-for="(g, index) in games" :key="index">
            {{g}}
          </h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  components: {
    Category
  }
}
</script>

<style lang="less" scoped>
.categoryList{
  display: flex;
  justify-content: space-around;
}
</style>