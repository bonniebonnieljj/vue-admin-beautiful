/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 导入所有 vuex 模块，自动加入namespaced:true，用于解决vuex命名冲突，请勿修改。
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// TODO require.context
const files = require.context("./modules", false, /\.js$/);
console.log("files.keys()", files.keys());
console.log("files是什么?", files, [
  "./errorLog.js",
  "./routes.js",
  "./settings.js",
  "./table.js",
  "./tagsBar.js",
  "./user.js",
]);
const modules = {};

files.keys().forEach((key) => {
  // TODO files(key).default
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
// TODO 做什么?
Object.keys(modules).forEach((key) => {
  modules[key]["namespaced"] = true;
});
console.log("处理了modules", modules);
const store = new Vuex.Store({
  modules,
});
console.log("store", store);
export default store;
