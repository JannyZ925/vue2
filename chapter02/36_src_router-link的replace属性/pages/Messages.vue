<template>
<div>
  <ul>
    <li v-for="msg in msgList" :key="msg.id">
      <router-link :to="{
        name: 'detail',
        params: {
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