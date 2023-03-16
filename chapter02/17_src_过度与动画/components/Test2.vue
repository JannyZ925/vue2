<template>
  <div>
    <button @click="isHidden = !isHidden">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h2 v-show="!isHidden" key="1">{{msg1}}</h2>
      <h2 v-show="isHidden" key="2">{{msg2}}</h2>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data(){
    return{
      msg1: 'Hello',
      msg2: 'Janny',
      isHidden: false
    }
  }
}
</script>

<style scoped>
h2{
  line-height: 50px;
  background-color: lightgoldenrodyellow;
}

.hello-enter, .hello-leave-to{
  transform: translateX(-100%);
}
.hello-leave, .hello-enter-to{
  transform: translateX(0);
}
.hello-enter-active, .hello-leave-active{
  transition: 1s linear;
}
</style>