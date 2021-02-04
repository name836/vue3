<!--  -->
<template>
  <div class="todo-header">
    <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model.trim="addData"
        @keyup.enter="add"
    />
  </div>
</template>

<script lang="ts">
import {reactive, ref, onBeforeMount, onMounted} from "vue";
import {Todo} from "@/type/type";

export default {
  name: "",
  props: {
    addTodo: {
      type: Function,
      required: true,
    },
  },
  setup(props: any) {
    const addData = ref("");
    const add = () => {
      if (!addData.value) return;
      props.addTodo({
        id: Date.now(),
        title: addData.value,
        isCompleted: false,
      });
      addData.value = ''
    };
    return {
      addData,
      add,
    };
  },
};
</script>
<style scoped></style>
