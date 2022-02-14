<template>
  <div class="app-container">
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="题号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="subjectId"
      label="课程号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="题目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="difficulty"
      label="难度"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="score"
      label="分值"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="questionType"
      label="题型"
      width="180"
      >
    </el-table-column>
    <el-table-column
      prop="answer"
      label="答案"
      >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { getAllQuestionHttp } from '@/api/question'

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
        getAllQuestionHttp(this.fetchBody).then(res => {
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
