<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title[titleStep] }}</span>
        <el-button style="float: right; padding: 3px 0" type="text"
          >操作按钮</el-button
        >
      </div>
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="单选难度">
    <el-select v-model="questionCreateModel.singleQuestionDif" placeholder="请选择单选题难度">
      <el-option v-for="item in difEnum" :key="item.value" 
      :label="item.text" :value="item.value"></el-option>
    </el-select>
  </el-form-item>

    <el-form-item label="单选数量">
      <el-input-number
        v-model="singleNum"
        :min="0"
        :max="10"
        label="单选题数量"
      ></el-input-number>
  </el-form-item>

  <el-form-item>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="createHttp">立即创建</el-button>
  </el-form-item>
</el-form>
    </el-card>
  </div>
</template>

<script>
import { createPaperHttp } from '@/api/paper';
export default {
  data() {
    return {
      form:{},
      title: ["创建试卷", "试卷作答", "试卷批改"],
      titleStep: 0,
      singleNum:0,
      questionCreateModel: {
        singleQuestionDif: 1,
        multiQuestionDif: 1,
        ansQuestionDif: 1,
        programQuestionDif: 1,
        singleQuestionScore:0,
        multiQuestionScore:0,
        ansQuestionScore:0,
        programQuestionScore:0
      },
      difEnum:[
        {
          text:'简单',
          value:1
        },
        {
          text:'中等',
          value:2
        },
        {
          text:'困难',
          value:3
        },
      ]
    };
  },
  methods:{
    createHttp(){
      this.questionCreateModel.singleQuestionScore = this.singleNum * 5
      console.log(this.questionCreateModel);
      createPaperHttp(this.questionCreateModel).then(res => {
        console.log(res,'paper');
      })
    }
  }
};
</script>

<style>
</style>