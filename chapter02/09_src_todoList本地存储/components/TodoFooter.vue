<template>
  <div class="todoFooter" v-show="todoList.length">
    <div>
      <input type="checkbox" v-model="selectAll">
      <span>已完成 {{ isDoneNum }} / 全部 {{ todoList.length }}</span>
    </div>

    <button @click="removeFinishedTodos">清除已完成的</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['todoList', 'changeAllStatus', 'deleteFinishedTodos'],
  computed: {
    // 计算完成的待办事项总数
    isDoneNum() {
      /*let temp = 0
      this.todoList.forEach((todo) => {
        if (todo.isDone) temp++
      })
      return temp*/

      // 使用reduce方法做条件统计
      return this.todoList.reduce((pre, todo)=> pre + (todo.isDone ? 1 : 0), 0)
    },
    selectAll: {
      get(){
        console.log('get被调用了~')
        return this.isDoneNum === this.todoList.length && this.todoList.length > 0
      },
      set(value){
        console.log('set被调用了~')
        this.changeAllStatus(value)
      }
    }
  },
  methods: {
    // 清除已完成的待办事项
    removeFinishedTodos(){
      if(confirm('确认清除？')) this.deleteFinishedTodos()
    }
  }
}
</script>

<style scoped lang="less">
.todoFooter {
  width: 400px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;

  span {
    padding-left: 5px;
  }

  button {
    background-color: brown;
    border-radius: 5px;
    color: white;
    border: none;
    width: 100px;
    line-height: 30px;
  }
}
</style>