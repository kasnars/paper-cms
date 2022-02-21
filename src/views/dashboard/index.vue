<template>

  <div>
    <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>错题表</span>
    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
  </div>

    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="题号" width="100"> </el-table-column>
      <el-table-column prop="subjectId" label="课程号" width="100">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column prop="content" label="题目"> </el-table-column>
      <el-table-column prop="diffText" label="难度" width="100">
      </el-table-column>
      <el-table-column prop="score" label="分值" width="100"> </el-table-column>
      <el-table-column prop="typeText" label="题型" width="100">
      </el-table-column>
      <!-- <el-table-column
      prop="answer"
      label="答案"
      >
    </el-table-column> -->
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="toDetail(scope.row)"
            >题目详情</el-button
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
            :disabled="tableData.length < payload.pageSize"
          >
            下一页</el-button
          >
          <el-button
            type="primary"
            style="float: right; margin: 20px"
            @click="prePage"
            :disabled="payload.currentPage === 1"
          >
            上一页</el-button
          >

        </div></el-col
      >
    </el-row>
    </el-card>
  </div>
</template>

<script>
import { checkWrongQuestionHttp } from "@/api/paper";
import { mapGetters } from "vuex";
import { getDiffLabel, getQuesTypeLabel } from "../../tools/getEnum";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"]),
  },
  data() {
    return {
      count: 0,
      payload: {
        currentPage: 1,
        pageSize: 10,
      },
      tableData: [],
    };
  },
  methods: {
    initData() {
      checkWrongQuestionHttp(this.payload).then((res) => {
        console.log(res, "res");
        this.tableData = res.data.data;
        console.log(this.tableData);
        this.tableData.forEach((item) => {
          item.statusText = item.status ? "有效" : "失效";
          item.diffText = getDiffLabel(item.difficulty);
          item.typeText = getQuesTypeLabel(item.questionType);
        });
      });
    },
    toDetail(row) {
      const { id } = row;
      this.$router.push(`/questionManage/detail/${id}`);
    },
          nextPage() {
      this.payload.currentPage++;
      this.initData();
    },
    prePage(){
      this.payload.currentPage--
      this.initData()
    }
  },
  mounted() {
    this.initData();
  },

};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
