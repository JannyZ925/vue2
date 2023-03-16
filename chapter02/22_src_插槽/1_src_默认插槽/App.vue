<template>
<div class="categoryList">
  <Category title="美食">
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fvt%2Ff0%2FQJ6859264761.jpg%3Fx-oss-process%3Dstyle%2Fshows&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664526373&t=13eebb2fef0f58c98e9c955128e1c04f">
  </Category>
  <Category title="游戏">
    <ul>
      <li v-for="(g, index) in games" :key="index">
        {{g}}
      </li>
    </ul>
  </Category>
  <Category title="电影">
    <video controls src="assets/video.mp4"></video>
  </Category>
</div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  components: {
    Category
  },
  data(){
    return{
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《人生大事》']
    }
  }
}
</script>

<style lang="less" scoped>
.categoryList{
  display: flex;
  justify-content: space-around;
}
</style>