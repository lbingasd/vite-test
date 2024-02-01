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
      <el-icon><i-ep-circle-check-filled /></el-icon> 
      Hello world
    </el-button>
    <el-table :data="tableData" class="custom-table"
      border
      fit
      :header-cell-style="{ borderColor: '#333', backgroundColor: '#555',  textAlign: 'center'}"
      :cell-style="{borderColor:'#333', textAlign: 'center'}"
      >
      <el-table-column class="col" prop="id" label="ID">
        <el-button>123</el-button>
      </el-table-column>
      <el-table-column class="col" prop="name" label="Name"></el-table-column>
      <el-table-column class="col" prop="age" label="Age"></el-table-column>
      <el-table-column class="col" prop="city" label="City"></el-table-column>
    </el-table>

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

interface UserData {
  id: number;
  name: string;
  age: number;
  city: string;
}
const tableData = ref<UserData[]>([
      { id: 1, name: 'John', age: 25, city: 'New York' },
      { id: 2, name: 'Jane', age: 30, city: 'Los Angeles' },
      { id: 3, name: 'li', age: 30, city: 'Los Angeles' },
      // Add more local data as needed
    ]);
</script>

<style lang="scss" scoped>
   .custom-table {
    width: 50%;
    border-collapse: collapse;
    border: 1px solid red;
  }
    
</style>