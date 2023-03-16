<template>
  <div>
    <button @click="isHidden = !isHidden">显示/隐藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutDown">
      <h2 v-show="!isHidden" key="1">{{msg1}}</h2>
      <h2 v-show="isHidden" key="2">{{msg2}}</h2>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
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
  background-color: lightpink;
}
</style>