/*
 * @Author: your name
 * @Date: 2020-12-14 18:03:16
 * @LastEditTime: 2020-12-14 18:10:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/router/index.js
 */
import App from '@/views/home';
import TableList from '@/views/tableList';
const routes = [
  {
    path: '/',
    exact: true,
    title: '首页',
    icons: 'HomeOutlined',
    component: App,
  },
  {
    path: '/tableList',
    title: '列表页',
    icons: 'ProjectOutlined',
    component: TableList,
  },
];

export default routes;
