<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ questionInfo.title || "暂未设置题目标题" }}</span>
      <!-- <el-button
        type="primary"
        round
        style="float: right"
        icon="el-icon-edit"
        size="small"
        @click="changeStatus"
        >{{ notChangeStatus ? "修改题目" : "提交修改" }}</el-button
      >
      <el-button
        type="info"
        round
        style="float: right; margin-right: 5px"
        icon="el-icon-edit"
        size="small"
        @click="notChangeStatus = true"
        v-if="!notChangeStatus"
        >取消修改</el-button
      > -->
    </div>
    <div>
      <el-form label-position="left" label-width="80px" :model="questionInfo">
        <el-form-item label="当前状态" v-if="notChangeStatus">
          <span style="margin-right: 10px">
            {{ questionInfo.status ? "已启用" : "已禁用" }}
          </span>
          <!-- <el-button
            type="danger"
            round
            v-if="questionInfo.status"
            @click="toOFF"
            >点击禁用</el-button
          >
          <el-button type="success" round v-else @click="toON"
            >点击启用</el-button
          > -->
        </el-form-item>
        <el-form-item label="标题">
          <div v-if="notChangeStatus">
            {{ questionInfo.title || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.title" v-else></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <div v-if="notChangeStatus">
            {{ questionInfo.content || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.content" v-else></el-input>
        </el-form-item>
        <el-form-item label="题型">
          <div v-if="notChangeStatus">
            {{ getQuesTypeLabel(questionInfo.questionType) }}
          </div>
          <el-input v-model="questionInfo.questionType" v-else></el-input>
        </el-form-item>
        <el-form-item label="分值">
          <div v-if="notChangeStatus">
            {{ questionInfo.score || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.score" v-else></el-input>
        </el-form-item>
        <el-form-item label="难度">
          <div v-if="notChangeStatus">
            {{ getDiffLabel(questionInfo.difficulty) }}
          </div>
          <el-input v-model="questionInfo.difficulty" v-else></el-input>
        </el-form-item>
        <el-form-item label="科目">
          <div v-if="notChangeStatus">
            {{ questionInfo.subjectId || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.subjectId" v-else></el-input>
        </el-form-item>
        <!-- <el-form-item label="状态">
          <div v-if="notChangeStatus">
            {{ questionInfo.status || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.status" v-else></el-input>
        </el-form-item> -->
        <el-form-item label="选项A">
          <div v-if="notChangeStatus">
            {{ questionInfo.optionA || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.optionA" v-else></el-input>
        </el-form-item>
        <el-form-item label="选项B">
          <div v-if="notChangeStatus">
            {{ questionInfo.optionB || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.optionB" v-else></el-input>
        </el-form-item>
        <el-form-item label="选项C">
          <div v-if="notChangeStatus">
            {{ questionInfo.optionC || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.optionC" v-else></el-input>
        </el-form-item>
        <el-form-item label="选项D">
          <div v-if="notChangeStatus">
            {{ questionInfo.optionD || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.optionD" v-else></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <div v-if="notChangeStatus">
            {{ questionInfo.answer || "暂未设置" }}
          </div>
          <el-input v-model="questionInfo.answer" v-else></el-input>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import {
  disableQuestionHttp,
  enableQuestionHttp,
  findQuestionByIdHttp,
  updateQuestionHttp,
} from "@/api/question";

import { getDiffLabel, getQuesTypeLabel } from "../../tools/getEnum";
import { findWrongQuestionByIdHttp } from '@/api/paper';
export default {
  data() {
    return {
      getDiffLabel,
      getQuesTypeLabel,
      id: "",
      questionInfo: {},
      notChangeStatus: true,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.initQuestionInfo();
  },
  methods: {
    initQuestionInfo() {
      
      findWrongQuestionByIdHttp({ id: this.id }).then((res) => {
        this.questionInfo = res.data.data;
      });
    },
    changeStatus() {
      this.notChangeStatus = !this.notChangeStatus;
      if (this.notChangeStatus) {
        delete this.questionInfo.status;
        updateQuestionHttp(this.questionInfo).then((res) => {
          console.log(this.questionInfo);
          console.log(res);
          this.$message.success("修改成功");
          this.initQuestionInfo();
          this.notChangeStatus = true;
        });
      }
    },
    toON() {
      enableQuestionHttp({ id: this.id }).then(() => {
        this.$message.success("开启成功");
        this.initQuestionInfo();
      });
    },
    toOFF() {
      disableQuestionHttp({ id: this.id }).then(() => {
        this.$message.success("禁用成功");
        this.initQuestionInfo();
      });
    },
  },
};
</script>

<style>
</style>