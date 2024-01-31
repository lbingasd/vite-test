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
  <div class="common-layout">
    <el-container style="flex: 1; height: 100vh;">
      <el-aside width="200px" style="background-color: aqua;">Aside</el-aside>
      <el-container >
        <el-header style="background-color: rgb(0, 60, 255);">Header</el-header>
        <el-main style="background-color: rgb(255, 0, 212);">
          <button @click="increment">Count is: {{ count }}</button>
          <button @click="increment1">Count1 is: {{ count1 }}</button>
          <HelloWorld msg="Vite + Vue" />
          <p>展示pinia的main的counter值： {{main.counter}}</p>
          <RouterView></RouterView>
          <el-row>
            <el-col :span="24"><div class="header grid-content ep-bg-purple-dark" /></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><div class="left  grid-content ep-bg-purple" /></el-col>
            <el-col :span="12"><div class="content  grid-content ep-bg-purple-light" /></el-col>
          </el-row>
          <p>This is <span class="red">red</span> and <span class="blue">blue</span> text.</p>
          <p>This is a paragraph of text.</p>
          <p style="font-family: 'Arial', sans-serif; color: red; margin-bottom: 10px;">Styled paragraph.</p>
          <div>
            <p>This is a paragraph with some <strong>strong text</strong>.</p>
            <p>Another paragraph.</p>
          </div>
          <ul>
            <li>Item 123</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
          </ol>
        </el-main>
        <el-footer style="background-color: rgb(0, 255, 106);">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.parent{
  display: flex;
}

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
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.ep-bg-purple-dark{
  background-color: #42b883aa;
}

.ep-bg-purple{
  background-color: aliceblue;
}

.ep-bg-purple-light{
  background-color: aqua;
}

</style>
