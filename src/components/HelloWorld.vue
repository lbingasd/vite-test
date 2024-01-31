<template>
  <div class="main-container">
    <el-menu default-active="图标1" class="category-menu">
      <el-menu-item :index="menuIcon.name" v-for="menuIcon in menuIconList" :key="menuIcon.name">
        <el-icon>
          <component :is="menuIcon.icon"></component>
        </el-icon>
        <span>{{ menuIcon.name }}</span>
      </el-menu-item>
    </el-menu>
    <el-button>
      <el-icon><i-ep-circle-check-filled /></el-icon> Hello world
    </el-button>
  </div>
</template>

<script setup lang="ts">

interface MenuItem {
  name: string;
  icon: any; // 这里应该使用正确的图标类型
}
const menuIconList:MenuItem[] = ([
  {
    name: '增',
    icon: IconEpPlus
  },
])
</script>
