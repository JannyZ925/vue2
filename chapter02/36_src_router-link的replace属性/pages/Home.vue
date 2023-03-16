<template>
<div>
  <h2>我是Home中的内容</h2>
  <div class="main">
    <ul>
      <li><router-link replace active-class="bg_lightsteelblue" to="/home/news">News</router-link></li>
      <li><router-link replace active-class="bg_lightsteelblue" to="/home/messages">Messages</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import News from "@/pages/News";
import Messages from "@/pages/Messages";

export default {
  name: "Home",
  components: {
    News,
    Messages
  },

  mounted() {
    console.log('Home组件挂载完毕', this)
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁')
  }
}
</script>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    display: flex;
    li {
      width: 100px;
      text-align: center;
      line-height: 40px;
      list-style: none;
      border: 1px solid lightgrey;

      &:first-of-type{
        border-right: none;
      }

      a{
        display: block;
        text-decoration: none;
        color: grey;
      }
    }

    .bg_lightsteelblue{
      background-color: lightsteelblue;
    }
  }
}
</style>

