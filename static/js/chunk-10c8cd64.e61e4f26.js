/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-9-12 23:20:31
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10c8cd64"],{"57e0":function(t,n,e){},"6dfb":function(t,n,e){"use strict";var l=e("57e0"),o=e.n(l);o.a},c61f:function(t,n,e){"use strict";e.r(n);var l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"better-scroll-container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[t._v(" 动画时长 "),e("el-slider",{staticStyle:{width:"300px"},attrs:{min:100,max:3e3},model:{value:t.time,callback:function(n){t.time=n},expression:"time"}}),e("el-button",{on:{click:function(n){return t.handleScrollTo(100)}}},[t._v("滚动到100像素位置")]),e("el-button",{on:{click:function(n){return t.handleScrollTo(300)}}},[t._v("滚动到300像素位置")]),e("el-button",{on:{click:function(n){return t.handleScrollBy(100)}}},[t._v("向下滚动100像素")]),e("el-button",{on:{click:function(n){return t.handleScrollBy(-50)}}},[t._v("向上滚动50像素")]),e("el-button",{on:{click:function(n){return t.handleScrollToElement(15)}}},[t._v("滚动到第15个")]),e("el-button",{on:{click:function(n){return t.handleScrollToElement(25)}}},[t._v("滚动到第25个")])],1),e("el-col",{attrs:{xs:24,sm:24,md:24,lg:24,xl:24}},[e("div",{ref:"wrapper",staticClass:"right-content"},[e("ul",t._l(100,(function(n){return e("li",{key:n,attrs:{id:"bs-item-"+n}},[t._v("n : "+t._s(n))])})),0)])])],1)],1)},o=[],c=e("f40f"),r={name:"BetterScroll",data:function(){return{time:1e3,BS:null}},mounted:function(){this.scrollInit()},beforeDestroy:function(){this.scrollDestroy()},methods:{handleScrollTo:function(t){this.BS.scrollTo(0,-t,this.time)},handleScrollBy:function(t){this.BS.scrollBy(0,-t,this.time)},handleScrollToElement:function(t){this.BS.scrollToElement("#bs-item-".concat(t),this.time)},scrollInit:function(){this.BS=new c["a"](this.$refs["wrapper"],{mouseWheel:!0,scrollbar:{fade:!0,interactive:!1}})},scrollDestroy:function(){this.BS&&this.BS.destroy()}}},i=r,s=(e("6dfb"),e("2877")),u=Object(s["a"])(i,l,o,!1,null,"1b8e9689",null);n["default"]=u.exports}}]);