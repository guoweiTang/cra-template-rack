/*
 * @Author: your name
 * @Date: 2020-12-14 18:03:16
 * @LastEditTime: 2020-12-21 16:10:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/router/index.js
 */
import App from '@/views/home';
import TableList from '@/views/tableList';
const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    icons: 'HomeOutlined',
    component: App,
  },
  {
    path: '/tableList',
    title: 'Table List',
    icons: 'ProjectOutlined',
    component: TableList,
  },
];

export default routes;
