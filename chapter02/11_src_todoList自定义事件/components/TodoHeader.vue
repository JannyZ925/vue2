<template>
  <div>
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车确认"
      @keydown.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "TodoHeader",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    // 添加待办事件
    add() {
      if (!this.title.trim()) {
        alert("任务名称不能为空！");
        return;
      }
      const todo = { id: nanoid(), title: this.title.trim(), isDone: false };
      this.$emit("addTodo", todo);
      this.title = "";
    },
  },
};
</script>

<style scoped lang="less">
input {
  width: 400px;
  line-height: 30px;
  padding-left: 8px;
  border: lightsteelblue 3px solid;
  border-radius: 5px;
  box-shadow: 0 0 5px lightsteelblue;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}
</style>