<template>
<div class="todoItem">
  <div>
    <input type="checkbox" :checked="todo.isDone" @change="handleChange(todo.id)">
    <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
    <!--    <input type="checkbox" v-model="todo.isDone">    -->
    <span>{{todo.title}}</span>
  </div>
  <button @click="handleDelete(todo.id)">删除</button>
</div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "TodoItem",
  props: ['todo'],
  methods: {
    handleChange(id){
      pubsub.publish('editStatus', id)
    },
    handleDelete(id){
      if(confirm('确认删除？')){
        pubsub.publish('deleteTodo', id)
      }
    }
  }
}
</script>

<style scoped lang="less">
.todoItem{
  line-height: 30px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  &:not(:last-of-type){
    border-bottom: 1px solid lightgrey;
  }
  span{
    padding-left: 5px;
  }
  button{
    background-color: brown;
    border-radius: 5px;
    color: white;
    border: none;
    width: 50px
  }
}
</style>