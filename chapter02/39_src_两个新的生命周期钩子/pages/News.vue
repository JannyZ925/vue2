<template>
<div>
  <ul>
    <li :style="{opacity}">这是News中的内容</li>
    <li>news1 <input type="text"></li>
    <li>news2 <input type="text"></li>
    <li>news3 <input type="text"></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "News",
  data(){
    return{
      opacity: 1
    }
  },
  beforeDestroy() {
    console.log('News组件即将被销毁')
  },
  activated() {
    this.timer = setInterval(()=>{
      this.opacity -= 0.1
      if(this.opacity <= 0) this.opacity = 1
      // console.log('@')
    }, 500)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
ul{
  width: 230px;
  padding: 0;
  li{
    line-height: 30px;
    list-style: none;
    text-align: center;
    a{
      text-decoration: none;
      color: lightsteelblue;
    }
  }
}
</style>