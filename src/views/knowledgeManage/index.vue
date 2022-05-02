<template>
  <div class="app-container">
      <!-- 章节
      <Charts-pop></Charts-pop> -->

          <el-row :gutter="20">
      <el-col :span="20">
        <el-input
          placeholder="请输入关键字搜索"
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
                  @click.native="dropVal = item.value"
                >
                  {{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="searchHttp">搜索知识点</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="addShow = true">新增知识点</el-button>
      </el-col>
    </el-row>

        <el-dialog title="新增章节" :visible.sync="addShow">
      <el-form :model="addForm">
 
        <!-- <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.subjectName" autocomplete="off"></el-input>
        </el-form-item>


        <el-form-item label="章节名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.chapterName" autocomplete="off"></el-input>
        </el-form-item> -->

                <el-form-item label="课程名称" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="addForm.subjectName" placeholder="请选择课程">
            <el-option
              v-for="item in dropItemList"
              :key="item.id"
              :label="item.name"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="章节名称" :label-width="formLabelWidth">
          <!-- <el-input v-model="addForm.subjectId" autocomplete="off"></el-input> -->
          <el-select v-model="addForm.chapterName" placeholder="请选择章节">
            <el-option
              v-for="item in chapterList"
              :key="item.id"
              :label="item.chapterName"
              :value="item.chapterName"
            ></el-option>
          </el-select>
        </el-form-item>



        <el-form-item label="知识点名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
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

        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.subjectName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="知识点名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.name" autocomplete="off"></el-input>
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
      label="知识点ID"
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
    <el-table-column
      prop="name"
      label="知识点"
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
import { findKnowledgeByCnameHttp, addKnowledgeHttp, deleteKnowledgeHttp,  updateKnowledgeHttp, findKnowledgeBySnameHttp } from '@/api/knowledge'

import ChartsPop from '../../components/ChartsPop'
import { getAllSubjectsHttp } from '@/api/subject'
import { findChapterHttp } from '@/api/chapter'

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
      dropVal: 0,
      dropItem:[
        {
          label: "按章节搜索",
          value: 0,
        },
        {
          label: "按课程搜索",
          value: 1,
        },
      ],
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
        name:'',
        subjectName:'',
      },
      formLabelWidth: "auto",
      chapterList:[],
      dropItemList:[],
            defaultFetchBody:{
        currentPage: 1,
        pageSize: 9999,
        name:''
      },
    }
  },
  watch:{
    "addForm.subjectName"(val){
      console.log(val,'123123');
      this.defaultFetchBody.name = val

      findChapterHttp(this.defaultFetchBody).then(res => {
        this.chapterList = res.data.data
        console.log(this.chapterList,'c');
              if(this.chapterList.length == 0){
        this.addForm.chapterName = null
      }
      })
    },
  },
  created() {
    this.fetchData()
  },
  mounted(){
    this.initData()
    this.getDropItem()
  },
  methods: {
    handleUpdate(row){
      this.updateShow = true
      console.log(row);
      this.updateForm = row

    },
    updateData(){
            updateKnowledgeHttp(this.updateForm).then(res => {
        this.initData();
        this.$message.success("修改成功");
        this.updateShow = false
        this.updateForm = {}
      })
    },
    handleDelete(row){
      const { id } = row;
      deleteKnowledgeHttp({ Id:id }).then((res) => {
        this.initData();
        this.$message.success("删除成功");
      });
    },
    addHttp(){
      addKnowledgeHttp(this.addForm).then(res => {
        this.fetchBody = this.initFetchBody
        this.initData()
        this.addShow = false
        this.addForm = {}
        if (res.data.status === 200) {
          this.$message.success('添加成功')
        }
        
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
        console.log(this.fetchBody);
        if (this.dropVal === 0) {
                  findKnowledgeByCnameHttp(this.fetchBody).then(res => {
            console.log(res,'res');
            this.tableData = res.data.data
            console.log(this.tableData);
        })
        } else {
        findKnowledgeBySnameHttp(this.fetchBody).then(res => {
            console.log(res,'res');
            this.tableData = res.data.data
            console.log(this.tableData);
        })
        }


    },
            nextPage() {
      this.fetchBody.currentPage++;
      this.initData();
    },
    prePage(){
      this.fetchBody.currentPage--
      this.initData()
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
      // findKnowledgeByCnameHttp(this.defaultFetchBody).then(res => {
      //   this.knowledgeList = res.data.data
      //   console.log(this.knowledgeList,'k');
      // })
    },
    
  }
}
</script>
