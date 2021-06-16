/*
 * @Description: file content
 * @Author: tangguowei
 * @Date: 2021-06-16 11:20:37
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-16 12:06:10
 */
import App from '../../views/home';
import Project from '../../views/project/index';
import UserInfo from '../../views/userInfo';
import {
  HomeOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
/**
 *
 * path: 'router-path'           路由路径
 * exact: boolean                强匹配
 * meta : {
 *  auth: boolean                账户认证级别，可以传布尔值
 *  hidden: boolean              是否不出现在侧边栏导航
 *  isScreen: boolean            是否全屏显示（登录，注册，404等界面通常设置）
 *  title: 'title'               标签页名称，侧边栏导航名称（当需要在侧边栏显示时为必填项）
 *  icon: react DOM              侧边栏导航图标
  }
 */
const routes = [
  {
    path: '/',
    exact: true,
    component: App,
    meta: {
      auth: true,
      title: '首页',
      icon: <HomeOutlined />,
    },
  },
  {
    path: '/project',
    exact: true,
    component: Project,
    meta: {
      auth: true,
      title: '项目',
      icon: <ProjectOutlined />,
    },
  },
  {
    path: '/userInfo',
    title: '我的账户',
    component: UserInfo,
    meta: {
      hidden: true,
      auth: true,
      title: '项目',
      icon: <ProjectOutlined />,
    },
  },
];

export default routes;
