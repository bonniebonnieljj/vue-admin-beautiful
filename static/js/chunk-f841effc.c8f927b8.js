/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-9-12 23:20:31
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f841effc"],{"1e0a":function(e,t,n){"use strict";var a=n("d1b4"),o=n.n(a);o.a},"1fa6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{key:e.table_key,attrs:{data:e.list},on:{"header-click":e.test}},[e._l(e.headers,(function(t){return[t.show?n("el-table-column",{key:t.key,attrs:{"show-overflow-tooltip":"",label:t.label,align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.row;return[e._v(" "+e._s(a[t.key])+" ")]}}],null,!0)}):e._e()]}))],2),n("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",total:1e3}})],1)},o=[],l={props:{list:{type:null,required:!0},headers:{type:Array,required:!0}},data:function(){return{query:{limit:20,cursor:1},table_key:0,total:0}},watch:{headers:function(){this.table_key++}},created:function(){},methods:{editdata:function(){},test:function(e){}}},r=l,i=n("2877"),s=Object(i["a"])(r,a,o,!1,null,null,null);t["default"]=s.exports},2117:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-header"},[n("draggable",{attrs:{group:"people"},on:{change:e.set,end:function(t){e.drag=!1},start:function(t){e.drag=!0}},model:{value:e.tableHeaders,callback:function(t){e.tableHeaders=t},expression:"tableHeaders"}},e._l(e.tableHeaders,(function(t){return n("div",{key:t.key},[n("el-popover",{attrs:{placement:"right",trigger:"focus"}},[n("el-tooltip",{staticClass:"item",attrs:{content:"该字段"+(""===t.opt?"未":"")+"置于template标签内，置于template方便自定义",effect:"dark",placement:"top-start"}},[""===t.opt?n("el-button",{on:{click:function(n){return e.opt(t,"template")}}},[e._v(" "+e._s(t.opt?"点击关闭自定义":"点击开启自定义")+" ")]):n("el-button",{on:{click:function(n){return e.opt(t,"")}}},[e._v(" "+e._s(t.opt?"点击关闭自定义":"点击开启自定义")+" ")])],1),n("el-tooltip",{staticClass:"item",attrs:{content:"该字段在表格中"+(t.show?"显示":"隐藏"),effect:"dark",placement:"top-start"}},[n("el-button",{on:{click:function(n){return e.hide(t)}}},[e._v(" "+e._s(t.show?"点击隐藏字段":"点击显示字段")+" ")])],1),n("div",{staticClass:"table-header-card",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",[e._v(e._s(t.key)+"对应的标题名称")]),n("div",[n("el-input",{attrs:{placeholder:t.label+"对应的字段名称"},model:{value:t.label,callback:function(n){e.$set(t,"label",n)},expression:"header.label"}})],1)],1)],1)],1)})),0)],1)},o=[],l=n("310e"),r=n.n(l),i={components:{draggable:r.a},props:{headers:{type:Array,required:!0}},data:function(){return{tableHeaders:this.headers}},watch:{headers:function(e){this.tableHeaders=e}},methods:{set:function(){this.$emit("update:headers",this.tableHeaders)},show:function(e){e.show=!0},hide:function(e){e.show=!e.show},opt:function(e,t){e.opt=t},query:function(e,t){e.query=t}}},s=i,c=(n("3d82"),n("2877")),u=Object(c["a"])(s,a,o,!1,null,"17e40b10",null);t["default"]=u.exports},2227:function(e,t,n){"use strict";n.r(t),n.d(t,"genTableSnippet",(function(){return o}));n("99af");var a=n("e3b5"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"getList";return'<template>\n  <div class="改成你的组件名-container">\n    <vab-query-form>\n      <vab-query-form-left-panel :span="12">\n        <el-button icon="el-icon-plus" type="primary">添加</el-button>\n        <el-button icon="el-icon-edit" type="warning">修改</el-button>\n        <el-button\n          icon="el-icon-delete"\n          type="danger"\n          @click="handleDelete"\n        >批量删除\n        </el-button\n        >\n      </vab-query-form-left-panel>\n      <vab-query-form-right-panel :span="12">\n        <el-form :inline="true" :model="queryForm" @submit.native.prevent>\n          <el-form-item>\n            <el-input\n              v-model.trim="queryForm.'.concat(e[0].key,'"\n              placeholder="请输入查询条件"\n              clearable\n            />\n          </el-form-item>\n          <el-form-item>\n            <el-button\n              icon="el-icon-search"\n              type="primary"\n              @click="queryData"\n            >查询\n            </el-button\n            >\n          </el-form-item>\n        </el-form>\n      </vab-query-form-right-panel>\n    </vab-query-form>\n\n    <el-table\n      v-loading="listLoading"\n      :height="height"\n      :data="list"\n      :element-loading-text="elementLoadingText"\n      @selection-change="setSelectRows"\n    >\n      <el-table-column show-overflow-tooltip type="selection"></el-table-column>\n      ').concat(Object(a["genTableColumnSnippet"])(e),'\n      <el-table-column show-overflow-tooltip fixed="right" label="操作" width="200">\n        <template v-slot="scope">\n          <el-button type="text" @click="editList(scope.row)"\n          >编辑\n          </el-button\n          >\n          <el-button type="text" @click="tableDelete(scope.row)"\n          >删除\n          </el-button\n          >\n        </template>\n      </el-table-column>\n    </el-table>\n    <el-pagination\n      :background="background"\n      :current-page="queryForm.pageNo"\n      :page-size="queryForm.pageSize"\n      :layout="layout"\n      :total="total"\n      @size-change="handleSizeChange"\n      @current-change="handleCurrentChange"\n    ></el-pagination>\n  </div>\n</template>\n\n<script>\n\n  import { getList } from "@/api/table";\n\n  export default {\n    name: "这里会报错,记住,你的view名称与文件夹名称相同不要忘了首字母大写,且唯一",\n    data() {\n      return {\n        list: null,\n        listLoading: true,\n        layout: "total, sizes, prev, pager, next, jumper",\n        total: 0,\n        background: true,\n        height: 0,\n        selectRows: "",\n        elementLoadingText: "正在加载...",\n        queryForm: {\n          pageNo: 1,\n          pageSize: 10,\n          ').concat(e[0].key,' : "",\n    }\n    };\n    },\n    created() {\n      this.fetchData();\n      this.height = this.$baseTableHeight(1);\n    },\n    methods: {\n      setSelectRows(val) {\n        this.selectRows = val;\n      },\n      editList(row) {\n      },\n      handleDelete() {\n        if (this.selectRows.length > 0) {\n          const ids = this.selectRows.map(item => item.id).join();\n          this.$baseConfirm(\n            "你确定要删除选中项吗",\n            null,\n            () => {\n              alert(ids);\n            },\n            () => {\n              alert("点击了取消");\n            },\n          );\n        } else {\n          this.$baseMessage("未选中任何行", "error");\n          return false;\n        }\n      },\n      tableDelete(row) {\n        alert(row.id);\n      },\n      handleSizeChange(val) {\n        this.queryForm.pageSize = val;\n        this.fetchData();\n      },\n      handleCurrentChange(val) {\n        this.queryForm.pageNo = val;\n        this.fetchData();\n      },\n      queryData() {\n        this.queryForm.pageNo = 1;\n        this.fetchData();\n      },\n    async  fetchData() {\n        this.listLoading = true;\n        const { data, totalCount }= await getList(this.queryForm);\n        this.list = data;\n        this.total = totalCount;\n        setTimeout(() => {\n          this.listLoading = false;\n        }, 300);\n      },\n    },\n  };\n<\/script>\n<style lang="scss" scoped></style>\n')}},"359f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("TableExhibitionQuery",{attrs:{headers:e.headers}}),n("el-row",[n("el-col",{attrs:{xs:24,sm:24,md:6,lg:6,xl:6}},[n("TableExhibitionHeader",{attrs:{headers:e.headers},on:{"update:headers":function(t){e.headers=t}}})],1),n("el-col",{attrs:{xs:24,sm:24,md:18,lg:18,xl:18}},[n("TableExhibitionBody",{attrs:{headers:e.headers,list:e.list}})],1)],1)],1)},o=[],l=(n("d81d"),n("fb6a"),n("b64b"),n("1fa6")),r=n("73ee"),i=n("2117"),s=n("2227"),c={components:{TableExhibitionBody:l["default"],TableExhibitionHeader:i["default"],TableExhibitionQuery:r["default"]},props:{tableData:{type:Object,default:function(){return{}}}},data:function(){return{list:[],code:"",headers:[],query:{limit:20,cursor:1},total:0}},watch:{tableData:{handler:function(e){var t=this;this.list=e.data&&e.data.slice(0,3),this.list&&(this.headers=Object.keys(this.list[0]).map((function(e){return{value:t.list[0][e],key:e,label:e,show:!0,opt:"",query:!1}})))},immediate:!0},headers:{handler:function(e){this.code=Object(s["genTableSnippet"])(e,this.getTableAPI),this.$store.dispatch("table/setTableCode",this.code)},deep:!0}},created:function(){},methods:{editdata:function(){},test:function(e){}}},u=c,d=n("2877"),f=Object(d["a"])(u,a,o,!1,null,null,null);t["default"]=f.exports},"3d82":function(e,t,n){"use strict";var a=n("47a3"),o=n.n(a);o.a},"47a3":function(e,t,n){},"57f2":function(e,t,n){},"73ee":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-query"},[n("div",[n("el-button",{attrs:{type:"primary"},on:{click:e.openCodeDialog}},[e._v("查看代码")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClipboard(e.srcTableCode,t)}}},[e._v(" 复制代码 ")])],1),n("el-dialog",{attrs:{"destroy-on-close":"",title:"查看代码",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("textarea",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:e.srcTableCode,expression:"srcTableCode"}],ref:"code",domProps:{value:e.srcTableCode},on:{input:function(t){t.target.composing||(e.srcTableCode=t.target.value)}}}),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.closeCodeDialog(e.srcTableCode,t)}}},[e._v(" 复制代码 ")])],1)])],1)},o=[],l=n("5530"),r=n("2f62"),i=n("f71e"),s=n("56b3"),c=n.n(s),u={props:{headers:{type:Array,required:!0}},data:function(){return{dialogVisible:!1}},computed:Object(l["a"])({},Object(r["c"])({srcTableCode:"table/srcTableCode"})),methods:{handleClipboard:function(e,t){Object(i["default"])(e,t)},openCodeDialog:function(){var e=this;this.dialogVisible=!0,setTimeout((function(){c.a.fromTextArea(e.$refs.code,{lineNumbers:!0,gutters:["CodeMirror-lint-markers"],theme:"rubyblue",autoRefresh:!0,lint:!0})}),0)},closeCodeDialog:function(e,t){this.handleClipboard(e,t),this.dialogVisible=!1}}},d=u,f=(n("1e0a"),n("2877")),p=Object(f["a"])(d,a,o,!1,null,"31fedbbe",null);t["default"]=p.exports},"8b2c":function(e,t,n){"use strict";var a=n("57f2"),o=n.n(a);o.a},"91af":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"15px"},attrs:{slot:"header"},slot:"header"},[n("el-button",{attrs:{type:"primary"},on:{click:e.prettierJSON}},[e._v("生成表格")])],1),n("json-editor",{on:{change:e.prettierNewJSON},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},o=[],l=n("fa7e"),r='{"code": 200, "msg": "操作成功", "pageNo": 1, "pageSize": 10, "totalPages": 4, "totalCount": 238, "data": [{"id": "", "title": "", "status": "", "author": "", "datetime": "", "pageViews": "", "img": "", "switch": ""}]}',i={components:{JsonEditor:l["default"]},data:function(){return{value:JSON.parse(r)}},computed:{},created:function(){this.prettierJSON()},methods:{prettierJSON:function(){this.$emit("change",r)},prettierNewJSON:function(e){this.$emit("change",e)}}},s=i,c=n("2877"),u=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=u.exports},d1b4:function(e,t,n){},d5cf:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-generator-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:4,lg:6,xl:6}},[n("TableEditor",{on:{change:e.setTableData}})],1),n("el-col",{attrs:{xs:24,sm:24,md:20,lg:18,xl:18}},[n("TableExhibition",{attrs:{"table-data":e.tableData}})],1)],1)],1)},o=[],l=n("91af"),r=n("359f"),i={name:"Index",components:{TableEditor:l["default"],TableExhibition:r["default"]},data:function(){return{tableData:{},getTableAPI:""}},methods:{setTableData:function(e){this.tableData=JSON.parse(e)}}},s=i,c=n("2877"),u=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=u.exports},e3b5:function(e,t,n){"use strict";n.r(t),n.d(t,"genTableColumnSnippet",(function(){return r}));n("99af"),n("4de4"),n("a15b"),n("d81d");var a={created_at:!0,create_time:!0,updated_at:!0,update_time:!0,start_time:!0,end_time:!0},o=function(e,t){return'<el-table-column show-overflow-tooltip prop="'.concat(e,'" label="').concat(t,'"/>')},l=function(e,t){var n="";return n=a[e]?"parseTime(row.".concat(e,")"):"row.".concat(e),'<el-table-column show-overflow-tooltip label="'.concat(t,'">\n          <template v-slot={row}>\n            {{ ').concat(n," }}\n          </template>\n        </el-table-column>")},r=function(e){return e.filter((function(e){return e.show})).map((function(e){return a[e.key]||"template"===e.opt?l(e.key,e.label):o(e.key,e.label)})).join("\n      ")}},f71e:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("a026"),o=n("b311"),l=n.n(o);function r(){a["default"].prototype.$baseMessage("复制成功","success")}function i(){a["default"].prototype.$baseMessage("复制失败","error")}function s(e,t){var n=new l.a(t.target,{text:function(){return e}});n.on("success",(function(){r(),n.destroy()})),n.on("error",(function(){i(),n.destroy()})),n.onClick(t)}},fa7e:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"json-editor"},[n("label",[n("textarea",{ref:"textarea"})])])},o=[],l=n("53ca"),r=n("56b3"),i=n.n(r);n("0dd0"),n("a7be"),n("acdf"),n("f9d4"),n("8822"),n("d2de");n("ae67");var s={name:"JsonEditor",props:{value:{type:[Array,Object],default:function(){return null}}},data:function(){return{jsonEditor:!1}},watch:{value:function(e){var t=this.jsonEditor.getValue();t?this.$emit("change",t):this.$baseMessage("JSON不能为空,否则无法生成表格","error"),e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var e=this;this.jsonEditor=i.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(t){e.isJsonString(t.getValue())&&e.$emit("change",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()},isJsonString:function(e){try{if("object"==Object(l["a"])(JSON.parse(e)))return!0}catch(t){}return!1}}},c=s,u=(n("8b2c"),n("2877")),d=Object(u["a"])(c,a,o,!1,null,"489b434e",null);t["default"]=d.exports}}]);