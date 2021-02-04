<!--  -->
<template>
  <div ref="Myscroll" style="height: 400px">
    <ul>
      <li v-for="(item, index) in data" :key="index" style="marginleft: 20px">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onBeforeMount, onMounted,  } from "vue";
import BScroll from "@better-scroll/core";
import MouseWheel from "@better-scroll/mouse-wheel";
import axios from 'axios'
BScroll.use(MouseWheel);
interface Datas {
  data: Array<number>;
}
import { ref } from "vue";
export default {
  setup() {
    const listData = reactive<Datas>({ data: [] });
    const Myscroll = ref<HTMLElement | string>("");
    // --
   
    onMounted(() => {
			axios.get('http://localhost:8000/delete').then((res)=>{
					console.log(res)
			})
      
      for (let index = 0; index < 60; index++) {
        listData.data.push(index);
      }
       new BScroll(Myscroll.value, {
        mouseWheel: true,
      });
      console.log(Myscroll.value);
    });
    return {
      Myscroll,
      ...toRefs(listData),
    };
  },
};
</script>
<style scoped>
</style>
