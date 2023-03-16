<template>
<div>
  <ul>
    <li v-for="msg in msgList" :key="msg.id">
      <!--      跳转路由并携带query参数，to的字符串写法-->
<!--      <router-link :to="`/home/messages/detail?id=${msg.id}&context=${msg.context}`">
        {{msg.context}}
      </router-link>-->

      <!--      跳转路由并携带query参数，to的对象写法-->
      <router-link :to="{
        path: '/home/messages/detail',
        query: {
          id: msg.id,
          context: msg.context
        }
      }">
        {{msg.context}}
      </router-link>

    </li>
  </ul>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Messages",
  data(){
    return{
      msgList: [
        {id: '001', context: 'message1'},
        {id: '002', context: 'message2'},
        {id: '003', context: 'message3'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
ul{
  width: 200px;
  padding: 0;
  li{
    text-align: center;
    list-style: none;
    line-height: 30px;
    a{
      text-decoration: none;
      color: lightsteelblue;
    }
  }
}
</style>