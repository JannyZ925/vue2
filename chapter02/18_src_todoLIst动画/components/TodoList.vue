<template>
  <div class="todoList">
    <transition-group name="todoItem" appear>
      <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
    </transition-group>
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
.todoItem-enter, .todoItem-leave-to{
  opacity: 0;
  height: 0;
  /*transform: translateX(100%);*/
}
.todoItem-leave, .todoItem-enter-to{
  opacity: 1;
  height: 30px;
  /*transform: translateX(0px);*/
}
.todoItem-enter-active, .todoItem-leave-active {
  transition: 0.5s linear;
}
</style>