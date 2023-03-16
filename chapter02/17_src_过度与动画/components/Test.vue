<template>
  <div>
    <button @click="isHidden = !isHidden">显示/隐藏</button>
    <transition name="hello" appear>
      <h2 v-show="!isHidden">{{msg}}</h2>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return{
      msg: 'Hello',
      isHidden: false
    }
  }
}
</script>

<style scoped>
h2{
  line-height: 50px;
  background-color: skyblue;
}

/*hello位置的值要与transition的name属性一致*/
.hello-enter-active{
  animation: test 1s;
}

.hello-leave-active{
  animation: test 1s reverse;
}

@keyframes test {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0);
  }
}
</style>