<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="20">

          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="searchBody.subject" clearable placeholder="请选择科目">
            <el-option
              v-for="item in dropItemList"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>



          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="searchBody.chapter" clearable  placeholder="请选择章节">
            <el-option
              v-for="item in chapterList"
              :key="item.id"
              :label="item.chapterName"
              :value="item.chapterName"
            ></el-option>
          </el-select>



          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="searchBody.knowledge" clearable  placeholder="请选择知识点">
            <el-option
              v-for="item in knowledgeList"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>



          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="searchBody.dif"  clearable  placeholder="请选择难度">
            <el-option
              v-for="item in DIFF_ENUM"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

                    <el-select
            v-model="searchBody.questionType"
            clearable 
            placeholder="请选择题目类型"
          >
            <el-option
              v-for="item in QUESTION_TYPE_ENUM"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

        <!-- <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchData"
          @keyup.enter.native="searchHttp"
        >
          <template slot="prepend">
            <el-dropdown>
              <span class="el-dropdown-link">
                {{ dropItem[dropVal].label }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="(item, index) in dropItem"
                  :key="index"
                  @click.native="changeSearch(item.value)"
                >
                  {{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-input> -->
                <!-- <el-form-item label="单选难度">
          <el-select
            v-model="questionCreateModel.singleQuestionDif"
            placeholder="请选择单选题难度"
          >
            <el-option
              v-for="item in difEnum"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item> -->
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="searchHttp">搜索题目</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addShow = true">新增题目</el-button>
      </el-col>
    </el-row>

    <el-dialog title="新增课程详情" :visible.sync="addShow">
      <el-form :model="addForm">
        <el-form-item label="课程名" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="addForm.subject" placeholder="请选择课程">
            <el-option
              v-for="item in dropItemList"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="章节" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="addForm.chapter" placeholder="请选择章节">
            <el-option
              v-for="item in chapterList"
              :key="item.id"
              :label="item.chapterName"
              :value="item.chapterName"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="知识点" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="addForm.knowledge" placeholder="请选择科目">
            <el-option
              v-for="item in knowledgeList"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="难度" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="addForm.difficulty" placeholder="请选择难度">
            <el-option
              v-for="item in DIFF_ENUM"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

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
          <!-- <el-input v-model="addForm.questionType" autocomplete="off"></el-input> -->
          <el-select
            v-model="addForm.questionType"
            placeholder="请选择题目类型"
          >
            <el-option
              v-for="item in QUESTION_TYPE_ENUM"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
                <el-form-item label="提示" :label-width="formLabelWidth">
          <el-input v-model="addForm.prompt" autocomplete="off"></el-input>
        </el-form-item>
                <el-form-item label="题目解析" :label-width="formLabelWidth">
          <el-input v-model="addForm.analyz" autocomplete="off"></el-input>
        </el-form-item>
                        <el-form-item label="分值" :label-width="formLabelWidth">
          <el-input v-model="addForm.score" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="选项A"
          :label-width="formLabelWidth"
          v-if="isSelect"
        >
          <el-input v-model="addForm.optionA" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="选项B"
          :label-width="formLabelWidth"
          v-if="isSelect"
        >
          <el-input v-model="addForm.optionB" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="选项C"
          :label-width="formLabelWidth"
          v-if="isSelect"
        >
          <el-input v-model="addForm.optionC" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="选项D"
          :label-width="formLabelWidth"
          v-if="isSelect"
        >
          <el-input v-model="addForm.optionD" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="答案" :label-width="formLabelWidth">
          <el-input v-model="addForm.answer" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="分值" :label-width="formLabelWidth">
          <el-input v-model="addForm.score" autocomplete="off"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addHttpRes">继续添加</el-button>
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="addHttp">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="题号" width="100"> </el-table-column>
      <el-table-column prop="subject" label="课程名" width="100">
      </el-table-column>
            <el-table-column prop="chapter" label="章节名" width="100">
      </el-table-column>
            <el-table-column prop="knowledge" label="知识点" width="100">
      </el-table-column>
      <el-table-column prop="statusText" label="状态" width="100">
      </el-table-column>
      <el-table-column prop="difText" label="难度" width="100">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="题目"> </el-table-column>
      <!-- <el-table-column
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
    </el-table-column> -->
      <el-table-column prop="typeText" label="题型" width="100">
      </el-table-column>
      <!-- <el-table-column
      prop="answer"
      label="答案"
      >
    </el-table-column> -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="">频率</el-button> -->
          <el-button size="mini" @click="open">频率</el-button>
          <el-button size="mini " @click="toDetail(scope.row)">详情</el-button>

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
import { getList } from "@/api/table";
import {
  addQuestionHttp,
  deleteQuestionHttp,
  findQuestionByCondition,
  findQuestionByQuestionCodeHttp,
  findQuestionHttp,
  getAllQuestionHttp,
} from "@/api/question";
import { getAllSubjectsHttp } from "@/api/subject";
import { getDiffLabel, getQuesTypeLabel } from "../../tools/getEnum";
import { QUESTION_TYPE_ENUM, DIFF_ENUM } from "../../tools/getEnum";
import { findChapterHttp } from '../../api/chapter'
import {findKnowledgeByCnameHttp } from '../../api/knowledge'
// import { getAllQuestionHttp } from '../../api/subject'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    // 0单选 2简答 1多选 多选传AB
    // 选择多选5分 填空10分 编程20
    return {
      DIFF_ENUM,
      isSelect: true,
      QUESTION_TYPE_ENUM,
      getDiffLabel,
      formLabelWidth: "auto",
      list: null,
      listLoading: true,
      fetchBody: {
        currentPage: 1,
        pageSize: 10,
      },
      searchBody:{
        subject:"",
        questionType:"",
        chapter:"",
        knowledge:'',
        dif:''
      },
      tableData: [],
      searchData: "",
      dialogFormVisible: false,
      form: {},
      dropItem: [
        {
          label: "按标题搜索",
          value: 0,
        },
        {
          label: "按学科编码",
          value: 1,
        },
      ],
      dropVal: 0,
      testData: [
        {
          id: "121",
          subjectId: 122,
          status: true,
          title: "测试标题",
          content: "测试题目",
          difficulty: 1,
          score: 5,
          questionType: 1,
          answer: "测试答案",
        },
      ],
      addShow: false,
      addForm: {
        answer: "",
        content: "",
        difficulty: null,
        optionA: null,
        optionB: null,
        optionC: null,
        optionD: null,
        questionType: null,
        score: null,
        subject: null,
        title: "",
        knowledge:'',
        chapter:'',
      },
      dropItemList: [],
      defaultFetchBody:{
        currentPage: 1,
        pageSize: 9999,
        name:''
      },
      chapterList:[],
      knowledgeList:[]
    };
  },
  watch: {
    "addForm.questionType"(val) {
      if (val <= 2) {
        // this.addForm.score = 5;
        this.isSelect = true;
      } else{
        this.isSelect = false;
      }
      // else if (val === 2) {
      //   this.addForm.score = 10;
      //   this.isSelect = false;
      // } else if (val === 3) {
      //   this.addForm.score = 20;
      //   this.isSelect = false;
      // }
    },
    "searchBody.subject"(val){
      console.log(val,'123123');
      this.defaultFetchBody.name = val

      findChapterHttp(this.defaultFetchBody).then(res => {
        this.chapterList = res.data.data
        console.log(this.chapterList,'c');
              if(this.chapterList.length == 0){
        this.searchBody.chapter = null
      }
      })
    },
    "addForm.subject"(val){
      console.log(val,'123123');
      this.defaultFetchBody.name = val

      findChapterHttp(this.defaultFetchBody).then(res => {
        this.chapterList = res.data.data
        console.log(this.chapterList,'c');
              if(this.chapterList.length == 0){
        this.addForm.chapter = null
      }
      })
    },

  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.initData();
    // this.tableData = this.testData
    this.getDropItem();
  },
  methods: {
          open() {
        this.$alert(`当前题目近一学期出现次数为${Math.floor(Math.random()*5+1)}次,当前题目近一学年出现次数为${Math.floor(Math.random()*5+6)}次`, '当前频率', {
          confirmButtonText: '确定',
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   });
          // }
        });
      },
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    formatResStatus(obj) {
      obj.forEach((item) => (item.statusText = item.status ? "有效" : "失效"));
    },
    initData() {
      console.log(this.fetchBody);
      getAllQuestionHttp(this.fetchBody).then((res) => {
        console.log(res, "res");
        // this.tableData = res.data.data
        // console.log(this.tableData);
        console.log(res.data.data, "row");
        res.data.data.forEach((item) => {
          item.statusText = item.status ? "有效" : "失效";
          // item.diffText = getDiffLabel(item.difficulty)
          item.typeText = getQuesTypeLabel(item.questionType);
          item.difText = getDiffLabel(item.difficulty)
          // console.log(typeof item.difficulty,'diff');
        });
        this.tableData = res.data.data;
        console.log(res.data.data, "resdata");
        console.log(this.tableData, "tabledata");
      });
    },
    changeSearch(val) {
      this.dropVal = val;
      console.log(this.dropVal);
    },
    toDetail(row) {
      const { id } = row;
      this.$router.push(`/questionManage/detail/${id}`);
    },
    searchHttp() {
      // if (this.dropVal == 1) {
        // findQuestionByQuestionCodeHttp({ subject: this.searchData }).then(
        //   (res) => {
        //     this.tableData = res.data.data;
        //     this.formatResStatus(this.tableData);
        //   }
        // );
      // } else if (this.dropVal == 0) {
        // let payload = { ...this.searchBody,};
        console.log(this.searchBody);
        findQuestionByCondition(this.searchBody).then(res => {
          this.tableData = res.data.data;
       this.formatResStatus(this.tableData);
        })
        // findQuestionHttp(this.searchBody).then((res) => {
        //   this.tableData = res.data.data;
        //   this.formatResStatus(this.tableData);
        // });
      // }
    },
    addHttp() {
      addQuestionHttp(this.addForm).then(() => {
        this.initData();
        this.$message.success("添加成功");
      });
      this.addShow = false;
    },
    addHttpRes(){
      addQuestionHttp(this.addForm).then(() => {
        this.initData();
        // this.addForm = null
/*         this.addForm.answer = null
        this.addForm.content = null
        this.addForm.title = null */
        let setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val);
let setNull = obj => setAll(obj, null);
setNull(this.addForm)
        this.$message.success("添加成功");
      });
      // this.addShow = false;
    },
    handleDelete(row) {
      const { id } = row;
      deleteQuestionHttp({ id }).then((res) => {
        this.initData();
        this.$message.success("删除成功");
      });
    },
    getDropItem() {
      getAllSubjectsHttp({ pageSize: 9999, currentPage: 1 }).then((res) => {
        console.log(res.data.data);
        this.dropItemList = res.data.data;
      });
      findChapterHttp(this.defaultFetchBody).then(res => {
        this.chapterList = res.data.data
        console.log(this.chapterList,'c');
      })
      findKnowledgeByCnameHttp(this.defaultFetchBody).then(res => {
        this.knowledgeList = res.data.data
        console.log(this.knowledgeList,'k');
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
  },
};
</script>
