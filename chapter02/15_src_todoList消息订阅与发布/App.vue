<template>
  <div class="app">
    <TodoHeader @addTodo="addTodo"/>
    <TodoList :todoList="todoList"/>
    <TodoFooter :todoList="todoList"
                @changeAllStatus="changeAllStatus"
                @deleteFinishedTodos="deleteFinishedTodos"/>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";

export default {
  name: "App",
  components: {
    TodoList,
    TodoHeader,
    TodoFooter
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }
  },
  methods: {
    // 添加待办事件
    addTodo(todo) {
      this.todoList.unshift(todo)
    },
    // 修改全选状态
    changeAllStatus(status) {
      if (status) this.todoList.forEach((todo) => todo.isDone = true)
      else this.todoList.forEach((todo) => todo.isDone = false)
    },
    // 清除已完成的待办事项
    deleteFinishedTodos() {
      this.todoList = this.todoList.filter((todo) => todo.isDone === false)
    }
  },
  watch: {
    todoList: {
      // 开启深度监视，否则无法检测到完成状态
      deep: true,
      handler(value){
        localStorage.setItem('todoList', JSON.stringify(value))
      }
    }
  },
  mounted() {
    // 修改待办事件的完成情况
    this.editStatus = pubsub.subscribe('editStatus', (msgName, id)=>{
      this.todoList.forEach((todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
      }))
    })

    // 删除待办事项
    this.deleteTodo = pubsub.subscribe('deleteTodo', (msgName, id)=>{
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.editStatus)
    pubsub.unsubscribe(this.deleteTodo)
  }
}
</script>

<style>
.app {
  width: 430px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid lightgray;
}
</style>


