<template>
  <div class="app-container">

    <el-row :gutter="20">
      <el-col :span="20">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchData"
          @keyup.enter.native="searchHttp"
        >
        <template slot="prepend">
          <el-dropdown>
  <span class="el-dropdown-link">
    {{dropItem[dropVal].label}}
  <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" >

    <el-dropdown-item v-for="(item, index) in dropItem" :key="index"  @click.native="changeSearch(item.value)"> 
      {{item.label}}
    </el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>
        </template>
        </el-input>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="dialogFormVisible = true"
          >新增课程</el-button
        >
      </el-col>
    </el-row>

    <el-dialog title="新增课程详情" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="课程号" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addHttp"
          >确 定</el-button
        >
      </div>
    </el-dialog>

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
    <!-- <el-table-column
      prop="content"
      label="题目"
      width="180">
    </el-table-column> -->
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
    <!-- <el-table-column
      prop="answer"
      label="答案"
      >
    </el-table-column> -->
    <el-table-column label="操作">
      <template slot-scope="scope">

        <el-button
          size="mini"
          @click="toDetail(scope.row)">详情</el-button>

        <el-button
          size="mini"
          @click="handleEdit(scope.row)">修改</el-button>

        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
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
      tableData:[],
      searchData:'',
      dialogFormVisible:false,
      form:{

      },
      dropItem:[
      {
        label:'标题内容',
        value:0
      },
      {
        label:'学科编码',
        value:1
      },
      ],
      dropVal:0,
      testData:[
        {
          id:'121',
          subjectId:122,
          status:true,
          title:'测试标题',
          content:'测试题目',
          difficulty:1,
          score:5,
          questionType:1,
          answer:'测试答案',
        }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    // this.initData()
    this.tableData = this.testData
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
    },
    changeSearch(val){
      this.dropVal = val
      console.log(this.dropVal);
    },
    toDetail(row){
      const { id } = row
      this.$router.push(`/questionManage/detail/${id}`)
    }
  }
}
</script>
