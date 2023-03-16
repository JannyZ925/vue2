<template>
  <div class="search">
    <h2>Search Github Users</h2>
    <input type="text" placeholder="enter the name you search" v-model="keyWord">
    <button @click="getUsers">Search</button>
  </div>
</template>

<script>

export default {
  name: "Search",
  data() {
    return {
      keyWord: '',
      users: []
    }
  },
  methods: {
    getUsers() {
      this.$bus.$emit('updateInfo', {isFirst: false, isLoading: true, errorMsg: '', users: []})
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`)
          .then(response => {
                console.log('请求成功了')
                this.$bus.$emit('updateInfo', {isFirst: false, isLoading: false, errorMsg: '', users: response.data.items})
              },
              error => {
                console.log('请求失败了', error)
                this.$bus.$emit('updateInfo', {isFirst: false, isLoading: false, errorMsg: error.message, users: []})
              }
          )
    }
  },

}
</script>

<style scoped lang="less">
.search {
  background-color: rgb(238, 237, 237);
  padding: 30px;

  input {
    outline: none;
  }

  button {
    margin-left: 5px;
  }
}
</style>