<!--  -->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll" />
    </label>
    <span>
      <span>已完成{{ cont }}</span> / 全部{{ todo.length }}
    </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, computed, onBeforeMount, onMounted } from "vue";
import { Todo } from "@/type/type";

export default {
  name: "",
  props: ["todo", "delAll"],
  setup(props: any) {
    const checkAll = computed({
      get() {
        if (props.todo.length == 0) return false;
        return props.todo.every((item: Todo) => item.isCompleted);
      },
      set(val: boolean) {
        props.todo.forEach((item: Todo) => {
          item.isCompleted = val;
        });
      },
    });
    const cont = computed(() => {
      return props.todo.reduce(
        (pre: number, old: Todo) => (pre += old.isCompleted ? 1 : 0),
        0
      );
    });
    return {
      checkAll,
      cont,
    };
  },
};
</script>
<style scoped></style>
