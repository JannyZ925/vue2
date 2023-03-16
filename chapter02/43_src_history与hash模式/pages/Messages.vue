<template>
<div>
  <ul>
    <li v-for="msg in msgList" :key="msg.id">
        {{msg.context}}
      <button @click="pushShow(msg)">push查看</button>
      <button @click="replaceShow(msg)">replace查看</button>
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
  },
  methods: {
    pushShow(msg){
      this.$router.push({
        name: 'detail',
        params: {
          id: msg.id,
          context: msg.context
        }
      })
    },
    replaceShow(msg){
      this.$router.replace({
        name: 'detail',
        params: {
          id: msg.id,
          context: msg.context
        }
      })
    }
  },
  beforeDestroy() {
    console.log('Messages组件即将被销毁')
  }
}
</script>

<style scoped lang="less">
ul{
  width: 240px;
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