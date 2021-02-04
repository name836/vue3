<!--  -->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="add"/>
        <List :todo='todoData' @del="del"/>
        <Footer :todo='todoData' :delAll="delAll"/>
        <van-button type="primary" size="large">大号按钮</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, toRefs, onBeforeMount, onMounted, toRef} from "vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import List from "./components/list.vue";
import {Todo} from './type/type'

export default {
  name: "",
  components: {
    Header,
    List,
    Footer,
  },
  setup() {
    const todolist = reactive<{ todoData: Todo[] }>({
      todoData: [{id: 1, title: '奔驰', isCompleted: false}]
    })
    const add = (data: Todo) => {
      todolist.todoData.unshift(data)
    }
    const del = (data: number) => {
      todolist.todoData.splice(data, 1)
    }
    const delAll = () => {
      todolist.todoData =  todolist.todoData.filter((todo) => !todo.isCompleted)
    }
    return {
      add,
      del,
      delAll,
      ...toRefs(todolist)
    }
  },
};
</script>
<style scoped></style>
