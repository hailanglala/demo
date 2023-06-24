<script setup></script>

<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID"></el-table-column>
      <el-table-column label="姓名" width="150"></el-table-column>
      <el-table-column label="籍贯"></el-table-column>
      <el-table-column label="操作" width="100">
        <template>
          <el-button type="primary" link >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>