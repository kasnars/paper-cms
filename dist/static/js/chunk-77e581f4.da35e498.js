(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e581f4"],{"2ac8":function(t,n,e){"use strict";e.d(n,"g",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return l})),e.d(n,"h",(function(){return f})),e.d(n,"f",(function(){return c})),e.d(n,"e",(function(){return r}));var o=e("504f"),i=function(t){return Object(o["b"])("/question/findAllQuestion",t)},s=function(t){return Object(o["a"])("/question/addQuestion",t)},u=function(t){return Object(o["b"])("/question/deleteQuestion",t)},a=function(t){return Object(o["b"])("/question/disableQuestion",t)},l=function(t){return Object(o["b"])("/question/enableQuestion",t)},f=function(t){return Object(o["a"])("/question/updateQuestion",t)},c=function(t){return Object(o["b"])("/question/findQuestionById",t)},r=function(t){return Object(o["a"])("/question/findQuestionByCondition",t)}},"7db0":function(t,n,e){"use strict";var o=e("23e7"),i=e("b727").find,s=e("44d2"),u=e("ae40"),a="find",l=!0,f=u(a);a in[]&&Array(1)[a]((function(){l=!1})),o({target:"Array",proto:!0,forced:l||!f},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(a)},bd5b:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(t.questionInfo.title||"暂未设置题目标题"))]),e("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",round:"",icon:"el-icon-edit",size:"small"},on:{click:t.changeStatus}},[t._v(t._s(t.notChangeStatus?"修改题目":"提交修改"))]),t.notChangeStatus?t._e():e("el-button",{staticStyle:{float:"right","margin-right":"5px"},attrs:{type:"info",round:"",icon:"el-icon-edit",size:"small"},on:{click:function(n){t.notChangeStatus=!0}}},[t._v("取消修改")])],1),e("div",[e("el-form",{attrs:{"label-position":"left","label-width":"80px",model:t.questionInfo}},[t.notChangeStatus?e("el-form-item",{attrs:{label:"当前状态"}},[e("span",{staticStyle:{"margin-right":"10px"}},[t._v(" "+t._s(t.questionInfo.status?"已启用":"已禁用")+" ")]),t.questionInfo.status?e("el-button",{attrs:{type:"danger",round:""},on:{click:t.toOFF}},[t._v("点击禁用")]):e("el-button",{attrs:{type:"success",round:""},on:{click:t.toON}},[t._v("点击启用")])],1):t._e(),e("el-form-item",{attrs:{label:"标题"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.title||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.title,callback:function(n){t.$set(t.questionInfo,"title",n)},expression:"questionInfo.title"}})],1),e("el-form-item",{attrs:{label:"内容"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.content||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.content,callback:function(n){t.$set(t.questionInfo,"content",n)},expression:"questionInfo.content"}})],1),e("el-form-item",{attrs:{label:"章节"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.chapter||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.chapter,callback:function(n){t.$set(t.questionInfo,"chapter",n)},expression:"questionInfo.chapter"}})],1),e("el-form-item",{attrs:{label:"知识点"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.knowledge||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.knowledge,callback:function(n){t.$set(t.questionInfo,"knowledge",n)},expression:"questionInfo.knowledge"}})],1),e("el-form-item",{attrs:{label:"题型"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.getQuesTypeLabel(t.questionInfo.questionType))+" ")]):e("el-input",{model:{value:t.questionInfo.questionType,callback:function(n){t.$set(t.questionInfo,"questionType",n)},expression:"questionInfo.questionType"}})],1),e("el-form-item",{attrs:{label:"分值"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.score||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.score,callback:function(n){t.$set(t.questionInfo,"score",n)},expression:"questionInfo.score"}})],1),e("el-form-item",{attrs:{label:"难度"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.getDiffLabel(t.questionInfo.difficulty))+" ")]):e("el-input",{model:{value:t.questionInfo.difficulty,callback:function(n){t.$set(t.questionInfo,"difficulty",n)},expression:"questionInfo.difficulty"}})],1),e("el-form-item",{attrs:{label:"科目"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.subject||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.subjectId,callback:function(n){t.$set(t.questionInfo,"subjectId",n)},expression:"questionInfo.subjectId"}})],1),e("el-form-item",{attrs:{label:"选项A"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.optionA||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.optionA,callback:function(n){t.$set(t.questionInfo,"optionA",n)},expression:"questionInfo.optionA"}})],1),e("el-form-item",{attrs:{label:"选项B"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.optionB||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.optionB,callback:function(n){t.$set(t.questionInfo,"optionB",n)},expression:"questionInfo.optionB"}})],1),e("el-form-item",{attrs:{label:"选项C"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.optionC||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.optionC,callback:function(n){t.$set(t.questionInfo,"optionC",n)},expression:"questionInfo.optionC"}})],1),e("el-form-item",{attrs:{label:"选项D"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.optionD||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.optionD,callback:function(n){t.$set(t.questionInfo,"optionD",n)},expression:"questionInfo.optionD"}})],1),e("el-form-item",{attrs:{label:"答案"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.answer||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.answer,callback:function(n){t.$set(t.questionInfo,"answer",n)},expression:"questionInfo.answer"}})],1),e("el-form-item",{attrs:{label:"题目解析"}},[t.notChangeStatus?e("div",[t._v(" "+t._s(t.questionInfo.analyz||"暂未设置")+" ")]):e("el-input",{model:{value:t.questionInfo.analyz,callback:function(n){t.$set(t.questionInfo,"analyz",n)},expression:"questionInfo.analyz"}})],1)],1)],1)])},i=[],s=e("2ac8"),u=e("d612"),a={data:function(){return{getDiffLabel:u["c"],getQuesTypeLabel:u["d"],id:"",questionInfo:{},notChangeStatus:!0}},mounted:function(){this.id=this.$route.params.id,console.log(this.id),this.initQuestionInfo()},methods:{initQuestionInfo:function(){var t=this;Object(s["f"])({id:this.id}).then((function(n){t.questionInfo=n.data.data}))},changeStatus:function(){var t=this;this.notChangeStatus=!this.notChangeStatus,this.notChangeStatus&&(delete this.questionInfo.status,Object(s["h"])(this.questionInfo).then((function(n){console.log(t.questionInfo),console.log(n),t.$message.success("修改成功"),t.initQuestionInfo(),t.notChangeStatus=!0})))},toON:function(){var t=this;Object(s["d"])({id:this.id}).then((function(){t.$message.success("开启成功"),t.initQuestionInfo()}))},toOFF:function(){var t=this;Object(s["c"])({id:this.id}).then((function(){t.$message.success("禁用成功"),t.initQuestionInfo()}))}}},l=a,f=e("2877"),c=Object(f["a"])(l,o,i,!1,null,null,null);n["default"]=c.exports},d612:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return u}));e("7db0"),e("d3b7");var o=[{label:"简单",value:1},{label:"中等",value:2},{label:"困难",value:3}],i=[{label:"单选",value:1},{label:"多选",value:2},{label:"判断",value:3},{label:"填空",value:4},{label:"简答",value:5},{label:"编程",value:6}],s=function(t){return o.find((function(n){return n.value===t})).label},u=function(t){return i.find((function(n){return n.value===t})).label}}}]);