<template>
  <div class="app-container">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="code"
      label="编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="课程名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { getAllSubjectsHttp } from '@/api/subject'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      fetchBody:{
          currentPage:1,
          pageSize:20
      },
      tableData:[]
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    this.initData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    initData() {
        console.log(this.fetchBody);
        getAllSubjectsHttp(this.fetchBody).then(res => {
            console.log(res,'res');
            this.tableData = res.data.data
            console.log(this.tableData);
            this.tableData.forEach(item => {
                item.status = item.status?'有效':'失效'
            })
        })
    }
  }
}
</script>
