<template>
    <div class="todoItem">
      <div>
        <input type="checkbox" :checked="todo.isDone" @change="handleChange(todo.id)">
        <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
        <!--    <input type="checkbox" v-model="todo.isDone">    -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input ref="editInput" type="text" v-show="todo.isEdit"
               :value="todo.title" @blur="handleBlur(todo, $event)">
      </div>
      <div>
        <button v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
        <button @click="handleDelete(todo.id)">删除</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['todo'],
  methods: {
    handleChange(id) {
      this.$bus.$emit('editStatus', id)
    },
    handleDelete(id) {
      if (confirm('确认删除？')) {
        this.$bus.$emit('deleteTodo', id)
      }
    },
    handleEdit(todo) {
      // 如果todo已经有isEdit属性，则将该属性值改为true，否则添加该属性
      if (todo.hasOwnProperty('isEdit')) todo.isEdit = true
      else this.$set(todo, 'isEdit', true)
      this.$nextTick(()=>{
        this.$refs.editInput.focus()
      })
    },
    handleBlur(todo, e) {
      if (!e.target.value.trim()) return alert('任务名不能为空！')
      todo.isEdit = false
      this.$bus.$emit('editTodo', todo.id, e.target.value)

    }
  }
}
</script>

<style scoped lang="less">
.todoItem {
  line-height: 30px;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    border-bottom: 1px solid lightgrey;
  }

  span {
    padding-left: 5px;
  }

  button {
    background-color: brown;
    border-radius: 5px;
    color: white;
    border: none;
    width: 50px;
    margin-left: 10px;
  }
}

</style>