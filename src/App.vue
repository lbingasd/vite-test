<script lang="ts" setup>
import api from './api/api'
// 响应式状态
const count = ref(0)
const count1 = ref(1)
const data = ref(null);

// 用来修改状态、触发更新的函数
function increment() {
  // 使用封装的 Axios 请求
  // 使用封装的 Axios 请求
  api.get('/example-endpoint')
    .then(response => {
      // 请求成功
      data.value = response.data;
    })
    .catch(error => {
      // 请求失败
      console.error('Error:', error);
    });
  count.value++
}

// 用来修改状态、触发更新的函数
function increment1() {
  count1.value++
}


// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})

import { useMain } from './store/home'
const main = useMain()
</script>
<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
    <button @click="increment1">Count1 is: {{ count1 }}</button>
    <HelloWorld msg="Vite + Vue" />
    <p>展示pinia的main的counter值： {{main.counter}}</p>
    <RouterView></RouterView>
  </div>
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
