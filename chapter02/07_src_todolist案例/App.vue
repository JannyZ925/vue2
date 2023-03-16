<template>
  <div class="app">
    <TodoHeader :addTodo="addTodo"/>
    <TodoList :todoList="todoList"
              :editStatus="editStatus" :deleteTodo="deleteTodo"/>
    <TodoFooter :todoList="todoList"
                :changeAllStatus="changeAllStatus"
                :deleteFinishedTodos="deleteFinishedTodos"/>
  </div>
</template>

<script>
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
      todoList: [
        {id: '001', title: '吃饭', isDone: true},
        {id: '002', title: '睡觉', isDone: false},
        {id: '003', title: '敲代码', isDone: true},
      ]
    }
  },
  methods: {
    // 添加待办事件
    addTodo(todo) {
      this.todoList.unshift(todo)
    },
    // 修改待办事件的完成情况
    editStatus(id) {
      this.todoList.forEach((todo => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone
        }
      }))
    },
    // 删除待办事项
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
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


