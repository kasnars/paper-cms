<template>
  <div class="app-container">
      章节
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
      prop="level"
      label="等级"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱">
    </el-table-column>
  </el-table>
          <el-row :gutter="20">
      <el-col :span="12" :offset="6"
        ><div class="grid-content bg-purple">

                              <el-button
            type="primary"
            style="float: right; margin: 20px"
            @click="nextPage"
            :disabled="tableData.length < fetchBody.pageSize"
          >
            下一页</el-button
          >
          <el-button
            type="primary"
            style="float: right; margin: 20px"
            @click="prePage"
            :disabled="fetchBody.currentPage === 1"
          >
            上一页</el-button
          >

        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { getAllUserListHttp } from '@/api/user'

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
          pageSize:10
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
        let query = `currentPage=${this.fetchBody.currentPage}&pageSize=${this.fetchBody.pageSize}`
        console.log(this.fetchBody);
        getAllUserListHttp(this.fetchBody).then(res => {
            console.log(res,'res');
            this.tableData = res.data.data
            console.log(this.tableData);
            this.tableData.forEach(item => {
                item.status = item.status?'有效':'失效'
            })
        })
    },
            nextPage() {
      this.fetchBody.currentPage++;
      this.initData();
    },
    prePage(){
      this.fetchBody.currentPage--
      this.initData()
    }
  }
}
</script>
