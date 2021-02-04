<!--  -->
<template>
  <ul class="todo-main">
    <li v-for="(item, index) in todo" :key="item.id" :item="item">
      <label>
        <input type="checkbox" v-model="item.isCompleted" />
        <span>{{ item?.title }}</span>
      </label>
      <button class="btn btn-danger btnhover btnshow" @click="del(index)">删除</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { reactive, toRefs, ref, onBeforeMount, onMounted } from "vue";
import { Todo } from "@/type/type";

export default {
  props: ["todo"],
  name: "",
  setup(prop: { todo: Todo[] }, { emit }: any) {
    const del = (item: number) =>{
      if (window.confirm("确定要删除吗?")) {
        emit("del", item);
      }
    };
    return {
      del,
    };
  },
};
</script>
<style scoped>
li:hover .btnhover {
  display: block;
}

.btnshow {
  display: none;
}
</style>
