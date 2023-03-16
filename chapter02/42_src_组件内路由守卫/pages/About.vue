<template>
<div>
  <h2>我是About中的内容</h2>
</div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log('About组件挂载完毕', this)
  },
  beforeDestroy() {
    console.log('About组件即将被销毁')
  },
  // 通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next){
    console.log('组件内路由守卫---beforeRouteEnter')
      if(localStorage.getItem('school') === 'atguigu'){
        next()
      }else {
        alert('您没有该权限')
      }
  },

  // 通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next){
    console.log('组件内路由守卫---beforeRouteLeave')
    next()
  }
}
</script>

