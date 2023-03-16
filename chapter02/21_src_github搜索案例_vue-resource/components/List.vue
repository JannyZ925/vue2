<template>
  <div>
    <h2 v-show="info.isFirst">欢迎使用</h2>
    <h2 v-show="info.isLoading">加载中...</h2>
    <h2>{{info.errorMsg}}</h2>
    <h2 v-show="!info.isFirst  &&  !info.isLoading  &&  !info.errorMsg  &&  info.users.length==0">没有找到符合条件的用户</h2>
    <ul class="userList">
      <li v-for="user in info.users" :key="user.id">
        <a :href="user.html_url">
          <img :src="user.avatar_url">
        </a>
        <span>{{ user.login }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: '',
        users: []
      }
    }
  },
  mounted() {
    this.$bus.$on('updateInfo', info => {
      this.info = info
    })
  },
  beforeDestroy() {
    this.$bus.$off('updateInfo')
  }
}
</script>

<style scoped lang="less">
.userList{
  padding: 0;

  display: flex;
  flex-flow: row wrap;

  li{
    border: 1px lightgrey solid;
    width: 200px;
    list-style: none;
    text-align: center;
    padding: 10px;

    a{
      img{
        width: 100px;
      }
    }

    span{
      display: block;
      text-align: center;
    }
  }
}
</style>