(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a7f90b42"],{"6c49":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return o}));var n=r("504f"),i=function(e){return Object(n["b"])("/paper/checkWrongQuestion",e)},a=function(e){return Object(n["a"])("/paper/createPaper",e)},l=function(e){return Object(n["b"])("/paper/revisePaper",e)},o=function(e){return Object(n["a"])("/paper/writeAnswer",e)}},b14a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v(e._s(e.title[e.titleStep]))])]),0===e.titleStep?r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"单选难度"}},[r("el-select",{attrs:{placeholder:"请选择单选题难度"},model:{value:e.questionCreateModel.singleQuestionDif,callback:function(t){e.$set(e.questionCreateModel,"singleQuestionDif",t)},expression:"questionCreateModel.singleQuestionDif"}},e._l(e.difEnum,(function(e){return r("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"单选数量"}},[r("el-input-number",{attrs:{min:0,max:10,label:"单选题数量"},model:{value:e.singleNum,callback:function(t){e.singleNum=t},expression:"singleNum"}})],1),r("el-form-item"),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.createHttp}},[e._v("立即创建")])],1)],1):1===e.titleStep?r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",[e._v(" 标题："+e._s(e.paperData[0][e.innerIndex].title)+" ")]),r("el-form-item",[e._v(" 难度："+e._s(e.paperData[0][e.innerIndex].difficulty)+" ")]),r("el-form-item",[e._v(" 题目："+e._s(e.paperData[0][e.innerIndex].content)+" ")]),r("el-form-item",[e._v(" 选项A："+e._s(e.paperData[0][e.innerIndex].optionA)+" ")]),r("el-form-item",[e._v(" 选项B："+e._s(e.paperData[0][e.innerIndex].optionB)+" ")]),r("el-form-item",[e._v(" 选项C："+e._s(e.paperData[0][e.innerIndex].optionC)+" ")]),r("el-form-item",[e._v(" 选项D："+e._s(e.paperData[0][e.innerIndex].optionD)+" ")]),r("el-form-item",[r("el-radio-group",{model:{value:e.myAnswer,callback:function(t){e.myAnswer=t},expression:"myAnswer"}},[r("el-radio",{attrs:{label:"A"}},[e._v("A")]),r("el-radio",{attrs:{label:"B"}},[e._v("B")]),r("el-radio",{attrs:{label:"C"}},[e._v("C")]),r("el-radio",{attrs:{label:"D"}},[e._v("D")])],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.postQuestion(e.paperData[0][e.innerIndex].id)}}},[e._v("提交")])],1)],1):2===e.titleStep?r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",[e._v(" 完成 ")]),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.toRevise}},[e._v("批改试卷")])],1)],1):3===e.titleStep?r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",[e._v(" 恭喜你已完成作答 ")]),r("el-form-item",[e._v(" 试卷总分："+e._s(e.userPaperOrder.sumScore)+" ")]),r("el-form-item",[e._v(" 你的得分："+e._s(e.userPaperOrder.userScore)+" ")]),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.writeAgain}},[e._v("再来一次")])],1)],1):e._e(),r("el-steps",{attrs:{active:e.titleStep,"finish-status":"success"}},[r("el-step",{attrs:{title:"创建试卷"}}),r("el-step",{attrs:{title:"试卷作答"}}),r("el-step",{attrs:{title:"试卷批改"}})],1)],1)],1)},i=[],a=r("6c49"),l={data:function(){return{form:{},title:["创建试卷","试卷作答","试卷批改","成绩报告"],titleStep:0,singleNum:0,questionCreateModel:{singleQuestionDif:1,multiQuestionDif:1,ansQuestionDif:1,programQuestionDif:1,singleQuestionScore:0,multiQuestionScore:0,ansQuestionScore:0,programQuestionScore:0},difEnum:[{text:"简单",value:1},{text:"中等",value:2},{text:"困难",value:3}],paperData:[],innerIndex:0,myAnswer:null,userPaperOrder:{}}},methods:{createHttp:function(){var e=this;this.questionCreateModel.singleQuestionScore=5*this.singleNum,console.log(this.questionCreateModel),Object(a["b"])(this.questionCreateModel).then((function(t){console.log(t,"paper"),e.paperData=t.data.data,e.titleStep=1}))},postQuestion:function(e){var t=this;console.log(this.myAnswer,"ans");var r={id:e,userAnswer:this.myAnswer};Object(a["d"])(r).then((function(e){console.log(e),t.innerIndex===t.paperData[0].length-1?(t.titleStep=2,t.innerIndex=0,t.myAnswer=null):(t.myAnswer=null,t.innerIndex++)}))},toRevise:function(){var e=this;Object(a["c"])({}).then((function(t){console.log(t.data.data),e.userPaperOrder=t.data.data,e.titleStep=3}))},writeAgain:function(){this.$router.go(0)}}},o=l,s=r("2877"),u=Object(s["a"])(o,n,i,!1,null,null,null);t["default"]=u.exports}}]);