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
        <el-button type="primary" @click="searchHttp"
          >搜索题目</el-button
        >
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="addShow = true"
          >新增题目</el-button
        >
      </el-col>
    </el-row>

    <el-dialog title="新增课程详情" :visible.sync="addShow">
      <el-form :model="addForm">
        <el-form-item label="课程号" :label-width="formLabelWidth">
          <el-input v-model="addForm.subjectId" autocomplete="off"></el-input>
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="addForm.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="题目" :label-width="formLabelWidth">
          <el-input v-model="addForm.content" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="内容" :label-width="formLabelWidth">
          <el-input v-model="addForm.code" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="题型" :label-width="formLabelWidth">
          <el-input v-model="addForm.questionType" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项A" :label-width="formLabelWidth">
          <el-input v-model="addForm.optionA" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项B" :label-width="formLabelWidth">
          <el-input v-model="addForm.optionB" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项C" :label-width="formLabelWidth">
          <el-input v-model="addForm.optionC" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选项D" :label-width="formLabelWidth">
          <el-input v-model="addForm.optionD" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="答案" :label-width="formLabelWidth">
          <el-input v-model="addForm.answer" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分值" :label-width="formLabelWidth">
          <el-input v-model="addForm.score" autocomplete="off"></el-input>
        </el-form-item>

        </el-form-item>

        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
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
      width="100">
    </el-table-column>
    <el-table-column
      prop="subjectId"
      label="课程号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="statusText"
      label="状态"
      width="100">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="题目"
      >
    </el-table-column>
    <el-table-column
      prop="diffText"
      label="难度"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="score"
      label="分值"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="typeText"
      label="题型"
      width="100"
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
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'
import { addQuestionHttp, deleteQuestionHttp, findQuestionByQuestionCodeHttp, findQuestionHttp, getAllQuestionHttp } from '@/api/question'
import { getDiffLabel, getQuesTypeLabel } from '../../tools/getEnum'

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
    // 0单选 2简答 1多选 多选传AB
    // 选择多选5分 填空10分 编程20
    return {
      getDiffLabel,
      formLabelWidth:'auto',
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
        label:'按标题搜索',
        value:0
      },
      {
        label:'按学科编码',
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
      ],
      addShow:false,
      addForm:{
        answer: "",
        content: "",
        difficulty: 0,
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        questionType: 0,
        score: 0,
        subjectId: 0,
        title: ""
      }
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    this.initData()
    // this.tableData = this.testData
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    formatResStatus(obj){
      obj.forEach(item => item.statusText = item.status?'有效':'失效')
    },
    initData() {
        console.log(this.fetchBody);
        getAllQuestionHttp(this.fetchBody).then(res => {
            console.log(res,'res');
            this.tableData = res.data.data
            console.log(this.tableData);
            this.tableData.forEach(item => {
                item.statusText = item.status?'有效':'失效'
                item.diffText = getDiffLabel(item.difficulty)
                item.typeText = getQuesTypeLabel(item.questionType)
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
    },
    searchHttp(){
      if(this.dropVal == 1) {
        findQuestionByQuestionCodeHttp({subjectId:this.searchData}).then(res => {
          this.tableData = res.data.data
          this.formatResStatus(this.tableData)
        })
      } else if(this.dropVal == 0){
        let payload = {...this.fetchBody, content: this.searchData}
        findQuestionHttp(payload).then(res => {
          this.tableData = res.data.data
          this.formatResStatus(this.tableData)
        })
      }
    },
    addHttp(){
      addQuestionHttp(this.addForm).then(() => {
        this.initData()
        this.$message.success('添加成功')
      })
      this.addShow = false
    },
    handleDelete(row){
      const { id } = row
      deleteQuestionHttp({id}).then(res => {
        this.initData()
        this.$message.success('删除成功')
        
      })
    }
  }
}
</script>
