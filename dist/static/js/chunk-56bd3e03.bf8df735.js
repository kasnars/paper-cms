(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56bd3e03"],{2057:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20}},[a("el-input",{attrs:{placeholder:"请输入关键字搜索","prefix-icon":"el-icon-search"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchHttp(e)}},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}},[a("template",{slot:"prepend"},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.dropItem[t.dropVal].label)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.dropItem,(function(e,o){return a("el-dropdown-item",{key:o,nativeOn:{click:function(a){t.dropVal=e.value}}},[t._v(" "+t._s(e.label)+" ")])})),1)],1)],1)],2)],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:t.searchHttp}},[t._v("搜索题目")])],1),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addShow=!0}}},[t._v("新增题目")])],1)],1),a("el-dialog",{attrs:{title:"新增章节",visible:t.addShow},on:{"update:visible":function(e){t.addShow=e}}},[a("el-form",{attrs:{model:t.addForm}},[a("el-form-item",{attrs:{label:"章节名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addForm.chapterName,callback:function(e){t.$set(t.addForm,"chapterName",e)},expression:"addForm.chapterName"}})],1),a("el-form-item",{attrs:{label:"课程名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addForm.subjectName,callback:function(e){t.$set(t.addForm,"subjectName",e)},expression:"addForm.subjectName"}})],1),a("el-form-item",{attrs:{label:"知识点名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.addShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addHttp}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"修改章节",visible:t.updateShow},on:{"update:visible":function(e){t.updateShow=e}}},[a("el-form",{attrs:{model:t.updateForm}},[a("el-form-item",{attrs:{label:"章节名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateForm.chapterName,callback:function(e){t.$set(t.updateForm,"chapterName",e)},expression:"updateForm.chapterName"}})],1),a("el-form-item",{attrs:{label:"课程名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateForm.subjectName,callback:function(e){t.$set(t.updateForm,"subjectName",e)},expression:"updateForm.subjectName"}})],1),a("el-form-item",{attrs:{label:"知识点名称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.updateForm.name,callback:function(e){t.$set(t.updateForm,"name",e)},expression:"updateForm.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.updateShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v("确 定")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"知识点ID",width:"180"}}),a("el-table-column",{attrs:{prop:"chapterName",label:"章节名",width:"180"}}),a("el-table-column",{attrs:{prop:"subjectName",label:"课程名",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"知识点",width:"180"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleUpdate(e.row)}}},[t._v("修改")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12,offset:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-button",{staticStyle:{float:"right",margin:"20px"},attrs:{type:"primary",disabled:t.tableData.length<t.fetchBody.pageSize},on:{click:t.nextPage}},[t._v(" 下一页")]),a("el-button",{staticStyle:{float:"right",margin:"20px"},attrs:{type:"primary",disabled:1===t.fetchBody.currentPage},on:{click:t.prePage}},[t._v(" 上一页")])],1)])],1)],1)},n=[],l=(a("b0c0"),a("ad8f")),r=a("db6a"),i=a("63c4"),c={components:[i["a"]],filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{dropVal:0,dropItem:[{label:"按章节搜索",value:0},{label:"按课程搜索",value:1}],updateForm:{},updateShow:!1,list:null,listLoading:!0,searchData:"",fetchBody:{currentPage:1,pageSize:10,name:""},initFetchBody:{currentPage:1,pageSize:10,name:""},tableData:[],addShow:!1,addForm:{chapterName:"",name:"",subjectName:""},formLabelWidth:"auto"}},created:function(){this.fetchData()},mounted:function(){this.initData()},methods:{handleUpdate:function(t){this.updateShow=!0,console.log(t),this.updateForm=t},updateData:function(){var t=this;Object(r["e"])(this.updateForm).then((function(e){t.initData(),t.$message.success("修改成功"),t.updateShow=!1,t.updateForm={}}))},handleDelete:function(t){var e=this,a=t.id;Object(r["b"])({Id:a}).then((function(t){e.initData(),e.$message.success("删除成功")}))},addHttp:function(){var t=this;Object(r["a"])(this.addForm).then((function(e){t.fetchBody=t.initFetchBody,t.initData(),t.addShow=!1,t.addForm={},200===e.data.status&&t.$message.success("添加成功")}))},searchHttp:function(){this.fetchBody.name=this.searchData,this.fetchBody.currentPage=1,this.initData()},fetchData:function(){var t=this;this.listLoading=!0,Object(l["a"])().then((function(e){t.list=e.data.items,t.listLoading=!1}))},initData:function(){var t=this;console.log(this.fetchBody),0===this.dropVal?Object(r["c"])(this.fetchBody).then((function(e){console.log(e,"res"),t.tableData=e.data.data,console.log(t.tableData)})):Object(r["d"])(this.fetchBody).then((function(e){console.log(e,"res"),t.tableData=e.data.data,console.log(t.tableData)}))},nextPage:function(){this.fetchBody.currentPage++,this.initData()},prePage:function(){this.fetchBody.currentPage--,this.initData()}}},d=c,s=a("2877"),u=Object(s["a"])(d,o,n,!1,null,null,null);e["default"]=u.exports},"63c4":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("zujian")])},n=[],l={},r=l,i=a("2877"),c=Object(i["a"])(r,o,n,!1,null,null,null);e["a"]=c.exports},ad8f:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775");function n(t){return Object(o["a"])({url:"/vue-admin-template/table/list",method:"get",params:t})}},db6a:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return i})),a.d(e,"e",(function(){return c}));var o=a("504f"),n=function(t){return Object(o["b"])("/knowledge/findChapterByCname",t)},l=function(t){return Object(o["b"])("/knowledge/findChapterBySname",t)},r=function(t){return Object(o["a"])("/knowledge/addKnowledge",t)},i=function(t){return Object(o["b"])("/knowledge/deleteKnowledge",t)},c=function(t){return Object(o["a"])("/knowledge/updateKnowledge",t)}}}]);