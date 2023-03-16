<template>
  <div class="todoList">
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: ['todoList'],
}
</script>

<style scoped>
.todoList {
  width: 400px;
  box-sizing: border-box;
  border: 1px solid lightgrey;
}
</style>