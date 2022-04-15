<template>
  <div class="app-container">
      <!-- 章节
      <Charts-pop></Charts-pop> -->

          <el-row :gutter="20">
      <el-col :span="20">
        <el-input
          placeholder="请输入章节名搜索"
          prefix-icon="el-icon-search"
          v-model="searchData"
          @keyup.enter.native="searchHttp"
        >
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="searchHttp">搜索题目</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addShow = true">新增题目</el-button>
      </el-col>
    </el-row>

        <el-dialog title="新增章节" :visible.sync="addShow">
      <el-form :model="addForm">
 

        <el-form-item label="章节名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.chapterName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="章节编号" :label-width="formLabelWidth">
          <el-input v-model="addForm.chapterNo" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.subjectName" autocomplete="off"></el-input>
        </el-form-item>
        

      </el-form>

      
      <div slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="addHttp">确 定</el-button>
      </div>
    </el-dialog>


<!-- xiugai -->
            <el-dialog title="修改章节" :visible.sync="updateShow">
      <el-form :model="updateForm">
 

        <el-form-item label="章节名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.chapterName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="章节编号" :label-width="formLabelWidth">
          <el-input v-model="updateForm.chapterNo" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.subjectName" autocomplete="off"></el-input>
        </el-form-item>
        

      </el-form>

      
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateShow = false">取 消</el-button>
        <el-button type="primary" @click="updateData">确 定</el-button>
      </div>
    </el-dialog>


  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="章节ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="chapterNo"
      label="课程下章节编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="chapterName"
      label="章节名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="subjectName"
      label="课程名"
      width="180">
    </el-table-column>
    <!-- <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column> -->

          <el-table-column label="操作">
        <template slot-scope="scope">
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
import { findChapterHttp, addChapterHttp, deleteChapterHttp,  updateChapterHttp } from '@/api/chapter'
import ChartsPop from '../../components/ChartsPop'

export default {
  components:[
    ChartsPop
  ],
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
      updateShow:false,
      list: null,
      listLoading: true,
      searchData:'',
      fetchBody:{
          currentPage:1,
          pageSize:10,
          name:''
      },
      initFetchBody:{
          currentPage:1,
          pageSize:10,
          name:''
      },
      tableData:[],
      addShow:false,
      addForm:{
        chapterName:'',
        chapterNo:'',
        subjectName:'',
      },
      formLabelWidth: "auto",
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    this.initData()
  },
  methods: {
    handleUpdate(row){
      this.updateShow = true
      console.log(row);
      this.updateForm = row

    },
    updateData(){
            updateChapterHttp(this.updateForm).then(res => {
        this.initData();
        this.$message.success("修改成功");
        this.updateShow = false
        this.updateForm = {}
      })
    },
    handleDelete(row){
      const { id } = row;
      deleteChapterHttp({ Id:id }).then((res) => {
        this.initData();
        this.$message.success("删除成功");
      });
    },
    addHttp(){
      addChapterHttp(this.addForm).then(res => {
        this.fetchBody = this.initFetchBody
        this.initData()
        this.addShow = false
        this.addForm = {}
        this.$message.success('添加成功')
      })
    },
    searchHttp(){
      this.fetchBody.name = this.searchData
      this.fetchBody.currentPage = 1
      this.initData()
    },
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
        findChapterHttp(this.fetchBody).then(res => {
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
