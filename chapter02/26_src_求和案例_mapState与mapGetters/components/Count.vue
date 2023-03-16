 <template>
<div>
  <h2>当前求和为：{{sum}}</h2>
  <h2>放大十倍后的和为：{{bigSum}}</h2>
  <h2>我在{{school}}学习{{subject}}</h2>
  <select v-model.number="num">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <button @click="addWhenSumIsOdd">当前和为奇数再加</button>
  <button @click="addForAMoment">等一等再加</button>
</div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: "Count",
  data(){
    return{
      num: 1
    }
  },
  computed: {
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

    // 借助mapState生成计算属性，从state中读取数据--对象写法
    // ...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
    // 借助mapState生成计算属性，从state中读取数据--数组写法
    ...mapState(['sum', 'school', 'subject']),

    // 借助mapGetters生成计算属性，从getters中获取数据--对象写法
    // ...mapGetters({bigSum: 'bigSum'}),
    // 借助mapGetters生成计算属性，从getters中获取数据--数组写法
    ...mapGetters(['bigSum'])
  },
  methods: {
    add(){
      this.$store.commit('ADD', this.num)
    },
    sub(){
      this.$store.commit('SUB', this.num)
    },
    addWhenSumIsOdd(){
      this.$store.dispatch('addWhenSumIsOdd', this.num)
    },
    addForAMoment(){
      this.$store.dispatch('addForAMoment', this.num)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>