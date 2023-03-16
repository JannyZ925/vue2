<template>
  <div class="todoList">
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"
              :editStatus="editStatus" :deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: ['todoList', 'editStatus', 'deleteTodo'],
}
</script>

<style scoped>
.todoList {
  width: 400px;
  box-sizing: border-box;
  border: 1px solid lightgrey;
}
</style>