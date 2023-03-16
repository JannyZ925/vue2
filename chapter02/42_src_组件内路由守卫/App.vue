<template>
  <div class="contain">
    <Banner/>
    <hr>
    <div class="main">
      <ul>
        <li><router-link active-class="bg_lightsteelblue" to="/about">About</router-link></li>
        <li><router-link active-class="bg_lightsteelblue" to="/home">Home</router-link></li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  name: "App",
  components: {
    Banner
  },
}
</script>

<style lang="less" scoped>
.contain {
  width: 70%;
  margin: 0 auto;

  .main {
    display: flex;
    justify-content: space-around;

    ul {
      padding: 0;
      width: 30%;
      li {
        width: 100px;
        text-align: center;
        line-height: 40px;
        list-style: none;
        border: 1px solid lightgrey;

        &:first-of-type{
          border-bottom: none;
        }

        a{
          display: block;
          text-decoration: none;
          color: grey;
        }
      }

      .bg_lightsteelblue{
        background-color: lightsteelblue;
      }
    }
    div{
      width: 70%;
    }
  }
}

</style>