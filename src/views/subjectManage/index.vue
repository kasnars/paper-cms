<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="20">
        <el-input
          placeholder="请输入课程名称搜索"
          prefix-icon="el-icon-search"
          v-model="searchData"
          @keyup.enter.native="searchHttp"
        >
        </el-input>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="searchHttp"
          >点击搜索</el-button
        >
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

    <el-table :data="tableData" stripe style="width: 100%">
      <!-- <el-table-column prop="id" label="ID" width="180"> </el-table-column> -->
      <el-table-column prop="code" label="编号" width="180"> </el-table-column>
      <el-table-column prop="name" label="课程名称" >
      </el-table-column>
      <el-table-column prop="statusText" label="状态" width="180"> </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
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

      <el-dialog title="新增课程详情" :visible.sync="editShow">
      <el-form :model="editForm">
        <el-form-item label="课程号" :label-width="formLabelWidth">
          <el-input v-model="editForm.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程名" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>

                <el-form-item label="课程状态" :label-width="formLabelWidth">
            <el-select v-model="editForm.status" placeholder="请选择">
    <el-option label="启用" :value="true"></el-option>
    <el-option label="禁用" :value="false"></el-option>
  </el-select>
        </el-form-item>

      </el-form>



      <div slot="footer" class="dialog-footer">
        <el-button @click="editShow = false">取 消</el-button>
        <el-button type="primary" @click="editHttp"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from "@/api/table";
import { addSubjectHttp, deleteSubjectHttp, findSubjectHttp, getAllSubjectsHttp, updateSubjectHttp } from "@/api/subject";

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
    return {
      list: null,
      listLoading: true,
      fetchBody: {
        currentPage: 1,
        pageSize: 20,
      },
      tableData: [],
      searchData: "",
      dialogFormVisible: false,
      formLabelWidth:'auto',
      form: {
        code:'',
        name:'',
      },
      testData:[
        {
          id:'23233',
          code:123123,
          name:'测试',
          status:false,
        }
      ],
      editShow:false,
      editForm:{

      }
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.initData();
    // this.tableData = this.testData
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then((response) => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    initData() {
      console.log(this.fetchBody);
      getAllSubjectsHttp(this.fetchBody).then((res) => {
        console.log(res, "res");
        this.tableData = res.data.data;
        console.log(this.tableData);
        this.tableData.forEach((item) => {
          item.statusText = item.status ? "有效" : "失效";
        });
      });
    },
    addHttp(){
      console.log(this.form,'form');
      addSubjectHttp(this.form).then(() => {
        this.initData()
        this.form = {}
      })
      this.dialogFormVisible = false
    },
    searchHttp(){
      let payload = { ...this.fetchBody, name:this.searchData}
      console.log(this.searchData);
      findSubjectHttp(payload).then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data
      })
    },
    handleEdit(row){
      this.editForm = JSON.parse(JSON.stringify(row))
      this.editShow = true
      console.log(row);

    },
    handleDelete(row){
      const { id } =  row 
      console.log(id,'del');
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteSubjectHttp({subjectId: id}).then(() => {
            this.initData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          })

        }).catch(() => {
            this.$message({
            type: 'info',
            message: '操作已取消!'
          });
        })
    },
    editHttp(){
      console.log(this.editForm,'edithttp');
      updateSubjectHttp(this.editForm).then(() => {
        this.initData()
        this.editShow = false
      })
    }
  },
};
</script>
