<template>
  <div class="app-container">

            <el-dialog title="新增课程" :visible.sync="addShow">
      <el-form :model="addForm">
 

        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="课程编码" :label-width="formLabelWidth">
          <el-input v-model="addForm.code" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      
      <div slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="addData">确 定</el-button>
      </div>
    </el-dialog>


                <el-dialog title="修改课程" :visible.sync="updateShow">
      <el-form :model="updateForm">
 

        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="课程编码" :label-width="formLabelWidth">
          <el-input v-model="updateForm.code" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateShow = false">取 消</el-button>
        <el-button type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>



              <el-row :gutter="20">
      <el-col :span="20">
        <el-input
          placeholder="请输入课程名搜索"
          prefix-icon="el-icon-search"
          v-model="searchData"
          @keyup.enter.native="searchHttp"
        >
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="searchHttp">搜索课程</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addShow = true">新增课程</el-button>
      </el-col>
    </el-row>
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
      label="课程编码"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="课程管理"
      width="180">
    </el-table-column>
    <!-- <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
    </el-table-column> -->
              <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"  @click="toChapter(scope.row)"
            >查看对应章节</el-button
          >
          <el-button size="mini"  @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
          
        </template>
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
import { addSubjectHttp, deleteSubjectHttp, findSubjectHttp, getAllSubjectsHttp, updateSubjectHttp } from '@/api/subject'

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
      updateForm:{},
      // updateShow:{},
      addForm:{},
      list: null,
      listLoading: true,
      fetchBody:{
          currentPage:1,
          pageSize:10
      },
      tableData:[],
      addShow:false,
      updateShow:false,
      searchData:''
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
        // let query = `currentPage=${this.fetchBody.currentPage}&pageSize=${this.fetchBody.pageSize}`
        // console.log(this.fetchBody);
        // getAllUserListHttp(this.fetchBody).then(res => {
        //     console.log(res,'res');
        //     this.tableData = res.data.data
        //     console.log(this.tableData);
        //     this.tableData.forEach(item => {
        //         item.status = item.status?'有效':'失效'
        //     })
        // })
        getAllSubjectsHttp(this.fetchBody).then(res => {
          this.tableData = res.data.data
          console.log(res.data.data);
        })
    },
    nextPage() {
      this.fetchBody.currentPage++;
      this.initData();
    },
    prePage(){
      this.fetchBody.currentPage--
      this.initData()
    },
    toChapter(row){
      console.log(row.name);
      this.$router.push(`/chaptersManage/${row.name}`)
    },
    addData(){
      addSubjectHttp(this.addForm).then(res => {
        this.addShow = false
        this.initData()
      })
    },
    handleUpdate(row){
      this.updateForm = row
      this.updateShow = true
    },
    updateData(){
      updateSubjectHttp(this.updateForm).then(res => {
        console.log('res1');
        this.updateShow = false
        // this.updateForm = null
        this.initData()
      })
    },
    handleDelete(row){
      deleteSubjectHttp({subjectId:row.id}).then(res => {
        this.$message.success('删除成功')
        this.initData()
      })
    },
    searchHttp(){
      findSubjectHttp({...this.fetchBody,name:this.searchData}).then(res => {
        this.tableData = res.data.data
      })
    }
  }
}
</script>
