<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "School",
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
    }
  },
  mounted() {
    // msgName是消息的名称，这里是hello
    this.pubId = pubsub.subscribe('hello', (msgName, name)=>{
      console.log('收到了数据：' + name)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style scoped lang="less">
.school{
  background-color: lightsteelblue;

  h2{
    color: brown;
  }
}
</style>
