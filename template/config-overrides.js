/*
 * @Author: your name
 * @Date: 2020-11-19 17:51:21
 * @LastEditTime: 2020-11-27 14:37:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /apis-webuser/config-overrides.js
 */
const { override, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path')
const paths = require('react-scripts/config/paths');

// 修改build输出目录
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  }),
  addDecoratorsLegacy(), 
);
