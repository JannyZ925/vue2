<template>
  <div>
    <ul>
      <li v-for="item in menu" :key="item.catId">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>

const axios = require('axios').default;

export default {
  name: "Test",
  data() {
    return {
      menu: []
    }
  },
  methods: {
    test() {
      /*return axios.get(`http://172.25.169.173:88/api/product/category/list/tree`)
          .catch((error) => {
            console.log(error)
          })
          .then((response) => {
            console.log(response)
            this.menu = response.data.data
          })
          // .then(({data}) => {
          //   this.menu = data.data
          // })*/
      const instance = axios.create({}).get('http://172.25.169.173:88/api/product/category/list/tree')
          .catch((error) => {
            console.log(error)
          })
          .then((response) => {
            console.log(response)
            this.menu = response.data.data
          })
      return instance
    }
  },
  created() {
    console.log(this.test())
  }
}
</script>

<style>

</style>


