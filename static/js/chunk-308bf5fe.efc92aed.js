/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-9-12 23:20:31
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-308bf5fe"],{"2f39":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blacklist-container"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v(" vue-admin-beautiful禁止以下人员使用 ")]),a("el-alert",{attrs:{closable:!1}},[t._v(" 这世界嘲笑你的人有很多，你又不是圣人，干嘛对每个人都仁慈，面对无端的辱骂和攻击，你只能选择将他记在这里，时刻提醒自己。 ")]),a("br"),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"QQ昵称",width:"180"}}),a("el-table-column",{attrs:{prop:"qq",label:"QQ号",width:"180"}}),a("el-table-column",{attrs:{prop:"excuse",label:"是否可原谅"}})],1)],1)},l=[],c=a("f514"),i={name:"Blacklist",components:{},data:function(){return{tableData:[]}},created:function(){this.fetchData()},mounted:function(){},methods:{fetchData:function(){var t=this;Object(c["getList"])().then((function(e){var a=e.data;t.tableData=a}))}}},r=i,s=a("2877"),o=Object(s["a"])(r,n,l,!1,null,null,null);e["default"]=o.exports},f514:function(t,e,a){"use strict";a.r(e),a.d(e,"getList",(function(){return l}));var n=a("b775");function l(t){return Object(n["default"])({url:"/blacklist/getList",method:"post",data:t})}}}]);