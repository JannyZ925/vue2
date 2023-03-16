<template>
  <div>
    <h1>Vue Router Demo</h1>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">测试一下go</button>
  </div>
</template>

<script>
export default {
  name: "banner",
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      this.$router.go(-2)
    }
  }
}
</script>

<style scoped>

</style>