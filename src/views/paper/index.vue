<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ title[titleStep] }}</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text"
        @click="titleStep++"
          >操作按钮</el-button
        > -->
      </div>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-if="titleStep === 0"
      >
        <el-form-item label="单选难度">
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
        </el-form-item>

        <el-form-item label="单选数量">
          <el-input-number
            v-model="singleNum"
            :min="0"
            :max="10"
            label="单选数量"
          ></el-input-number>
        </el-form-item>

                <el-form-item label="多选难度">
          <el-select
            v-model="questionCreateModel.multiQuestionDif"
            placeholder="请选择单选题难度"
          >
            <el-option
              v-for="item in difEnum"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="多选数量">
          <el-input-number
            v-model="multNum"
            :min="0"
            :max="10"
            label="单选题数量"
          ></el-input-number>
        </el-form-item>

                <el-form-item label="简答难度">
          <el-select
            v-model="questionCreateModel.ansQuestionDif"
            placeholder="请选择单选题难度"
          >
            <el-option
              v-for="item in difEnum"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="简答数量">
          <el-input-number
            v-model="ansNum"
            :min="0"
            :max="10"
            label="单选题数量"
          ></el-input-number>
        </el-form-item>

                <el-form-item label="编程难度">
          <el-select
            v-model="questionCreateModel.programQuestionDif"
            placeholder="请选择单选题难度"
          >
            <el-option
              v-for="item in difEnum"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="编程数量">
          <el-input-number
            v-model="proNum"
            :min="0"
            :max="10"
            label="单选题数量"
          ></el-input-number>
        </el-form-item>

        <el-form-item> </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="createHttp">立即创建</el-button>
        </el-form-item>
      </el-form>


      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-else-if="titleStep === 1 && paperData[nowQuestionType].length > 0 && nowQuestionType === 0"
      >

        <el-form-item> 
          标题：{{paperData[nowQuestionType][innerIndex].title}}
        </el-form-item>

        <el-form-item> 
          难度：{{paperData[nowQuestionType][innerIndex].difficulty}}
        </el-form-item>

        <el-form-item> 
          题目：{{paperData[nowQuestionType][innerIndex].content}}
        </el-form-item>

        <el-form-item> 
          选项A：{{paperData[nowQuestionType][innerIndex].optionA}}
        </el-form-item>

        <el-form-item> 
          选项B：{{paperData[nowQuestionType][innerIndex].optionB}}
        </el-form-item>

        <el-form-item> 
          选项C：{{paperData[nowQuestionType][innerIndex].optionC}}
        </el-form-item>

        <el-form-item> 
          选项D：{{paperData[nowQuestionType][innerIndex].optionD}}
        </el-form-item>

        <el-form-item> 
          <el-radio-group v-model="myAnswer">
            <el-radio label="A">A</el-radio>
            <el-radio label="B">B</el-radio>
            <el-radio label="C">C</el-radio>
            <el-radio label="D">D</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="postQuestion(paperData[nowQuestionType][innerIndex].id)">提交</el-button>
        </el-form-item>
      </el-form>

            <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-else-if="titleStep === 1 && paperData[nowQuestionType].length > 0 && nowQuestionType === 1"
      >

        <el-form-item> 
          标题：{{paperData[nowQuestionType][innerIndex].title}}
        </el-form-item>

        <el-form-item> 
          难度：{{paperData[nowQuestionType][innerIndex].difficulty}}
        </el-form-item>

        <el-form-item> 
          题目：{{paperData[nowQuestionType][innerIndex].content}}
        </el-form-item>

        <el-form-item> 
          选项A：{{paperData[nowQuestionType][innerIndex].optionA}}
        </el-form-item>

        <el-form-item> 
          选项B：{{paperData[nowQuestionType][innerIndex].optionB}}
        </el-form-item>

        <el-form-item> 
          选项C：{{paperData[nowQuestionType][innerIndex].optionC}}
        </el-form-item>

        <el-form-item> 
          选项D：{{paperData[nowQuestionType][innerIndex].optionD}}
        </el-form-item>

        <el-form-item> 
          <!-- <el-radio-group v-model="myAnswer">
            <el-radio label="A">A</el-radio>
            <el-radio label="B">B</el-radio>
            <el-radio label="C">C</el-radio>
            <el-radio label="D">D</el-radio>
          </el-radio-group> -->

            <el-checkbox-group v-model="checkList">
    <el-checkbox label="A">A</el-checkbox>
    <el-checkbox label="B">B</el-checkbox>
    <el-checkbox label="C">C</el-checkbox>
    <el-checkbox label="D">D</el-checkbox>
  </el-checkbox-group>

        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="postQuestion(paperData[nowQuestionType][innerIndex].id)">提交</el-button>
        </el-form-item>
      </el-form>

            <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-else-if="titleStep === 1 && paperData[nowQuestionType].length > 0 && nowQuestionType === 2"
      >

        <el-form-item> 
          标题：{{paperData[nowQuestionType][innerIndex].title}}
        </el-form-item>

        <el-form-item> 
          难度：{{paperData[nowQuestionType][innerIndex].difficulty}}
        </el-form-item>

        <el-form-item> 
          题目：{{paperData[nowQuestionType][innerIndex].content}}
        </el-form-item>

        <!-- <el-form-item> 
          选项A：{{paperData[0][innerIndex].optionA}}
        </el-form-item>

        <el-form-item> 
          选项B：{{paperData[0][innerIndex].optionB}}
        </el-form-item>

        <el-form-item> 
          选项C：{{paperData[0][innerIndex].optionC}}
        </el-form-item>

        <el-form-item> 
          选项D：{{paperData[0][innerIndex].optionD}}
        </el-form-item> -->

        <el-form-item> 
          <!-- <el-radio-group v-model="myAnswer">
            <el-radio label="A">A</el-radio>
            <el-radio label="B">B</el-radio>
            <el-radio label="C">C</el-radio>
            <el-radio label="D">D</el-radio>
          </el-radio-group> -->
          <el-input v-model="myAnswer" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="postQuestion(paperData[nowQuestionType][innerIndex].id)">提交</el-button>
        </el-form-item>
      </el-form>

            <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-else-if="titleStep === 1 && paperData[nowQuestionType].length > 0 && nowQuestionType === 3"
      >

        <el-form-item> 
          标题：{{paperData[nowQuestionType][innerIndex].title}}
        </el-form-item>

        <el-form-item> 
          难度：{{paperData[nowQuestionType][innerIndex].difficulty}}
        </el-form-item>

        <el-form-item> 
          题目：{{paperData[nowQuestionType][innerIndex].content}}
        </el-form-item>

        <!-- <el-form-item> 
          选项A：{{paperData[0][innerIndex].optionA}}
        </el-form-item>

        <el-form-item> 
          选项B：{{paperData[0][innerIndex].optionB}}
        </el-form-item>

        <el-form-item> 
          选项C：{{paperData[0][innerIndex].optionC}}
        </el-form-item>

        <el-form-item> 
          选项D：{{paperData[0][innerIndex].optionD}}
        </el-form-item> -->

        <el-form-item> 
          <el-input v-model="myAnswer" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="postQuestion(paperData[nowQuestionType][innerIndex].id)">提交</el-button>
        </el-form-item>
      </el-form>

      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-else-if="titleStep === 2"
      >

        <el-form-item> 
          完成
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="toRevise">批改试卷</el-button>
        </el-form-item>
      </el-form>

      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        v-else-if="titleStep === 3"
      >

        <el-form-item> 
          恭喜你已完成作答
        </el-form-item>
        <el-form-item> 
          试卷总分：{{userPaperOrder.sumScore}}
        </el-form-item>
        <el-form-item> 
          你的得分：{{userPaperOrder.userScore}}
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="writeAgain">再来一次</el-button>
        </el-form-item>
      </el-form>



      <el-steps :active="titleStep" finish-status="success">
        <el-step title="创建试卷"></el-step>
        <el-step title="试卷作答"></el-step>
        <el-step title="试卷批改"></el-step>
      </el-steps>
    </el-card>
  </div>
</template>

<script>
import { createPaperHttp, revisePaperHttp, writeAnswerHttp } from "@/api/paper";
export default {
  data() {
    return {
      checkList:[],
      form: {},
      title: ["创建试卷", "试卷作答", "试卷批改", "成绩报告"],
      titleStep: 0,
      singleNum: 0,
      multNum:0,
      ansNum:0,
      proNum:0,
      questionCreateModel: {
        singleQuestionDif: 1,
        multiQuestionDif: 1,
        ansQuestionDif: 1,
        programQuestionDif: 1,
        singleQuestionScore: 0,
        multiQuestionScore: 0,
        ansQuestionScore: 0,
        programQuestionScore: 0,
      },
      difEnum: [
        {
          text: "简单",
          value: 1,
        },
        {
          text: "中等",
          value: 2,
        },
        {
          text: "困难",
          value: 3,
        },
      ],
      paperData:[],
      innerIndex:0,
      myAnswer:null,
      userPaperOrder:{},
      // 记录当前所遍历的题目类型
      // 0 1 2 3 单选 多选 简答 编程
      nowQuestionType:null,
    };
  },
  watch:{
    nowQuestionType(){
      if(this.paperData[this.nowQuestionType].length === 0 && this.nowQuestionType < 3){
        this.nowQuestionType ++
        console.log(this.nowQuestionType,'nowtype');
      }
      if(this.nowQuestionType === 3 && this.paperData[this.nowQuestionType].length === 0){
        this.titleStep = 2
      }
    }
  },
  methods: {
    createHttp() {
      this.questionCreateModel.singleQuestionScore = this.singleNum * 5;
      this.questionCreateModel.multiQuestionScore = this.multNum *5
      this.questionCreateModel.ansQuestionScore = this.ansNum * 10
      this.questionCreateModel.programQuestionScore = this.proNum * 20
      console.log(this.questionCreateModel);
      createPaperHttp(this.questionCreateModel).then((res) => {
        console.log(res, "paper");
        this.paperData = res.data.data
        this.titleStep = 1
        this.nowQuestionType = 0
        // while(this.paperData[this.nowQuestionType].length === 0){
        //   this.nowQuestionType ++ 
        // }
      });
    },
    postQuestion(id){
      console.log(this.myAnswer,'ans');
      if(this.nowQuestionType === 1){
        this.myAnswer = this.checkList.join()
      }
      let params = {
        id,
        userAnswer:this.myAnswer
      }
      writeAnswerHttp(params).then(res => {
        console.log(res);
        if(this.innerIndex === this.paperData[this.nowQuestionType].length-1){
          if(this.nowQuestionType === 3){
            this.titleStep = 2
          }
          this.innerIndex = 0
          this.nowQuestionType ++
          this.myAnswer = null
        } else {
          this.myAnswer = null
          this.innerIndex ++
        }
      })
    },
    toRevise(){
      revisePaperHttp({}).then(res => {
        console.log(res.data.data);
        this.userPaperOrder = res.data.data
        this.titleStep = 3
      })
    },
    writeAgain(){
      this.$router.go(0)
    },
    
  },

};
</script>

<style>
</style>