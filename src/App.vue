<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';

const list = ref([])

const getList = async () => {
  const res = await axios.get('/list')
  // console.log(res)
  list.value = res.data
}

const del = async (id) => {
  await axios.delete('/del?id=' + id)
  getList()
}

onMounted(() => {
  getList()
})

</script>

<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" width="150" prop="name"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="100">
        <template v-slot="{ row }">
          <el-button type="primary" link @click="del(row.id)">删除</el-button>
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