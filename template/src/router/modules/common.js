/*
 * @Description: 公共路由
 * @Author: tangguowei
 * @Date: 2021-06-16 11:06:37
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-16 14:20:55
 */
import Login from '../../views/auth/login';
import Register from '../../views/auth/register';
import ResetPassword from '../../views/auth/resetPassword';
import ResetPasswordConfirm from '../../views/auth/resetPassword/confirm';
import ResetPasswordSuccess from '../../views/auth/resetPassword/success';
import Error404 from '../../views/error/404';

const commonMeta = {
  hidden: true,
  isFullScreen: true,
}
const routes = [
  {
    path: '/auth/login',
    exact: true,
    component: Login,
    meta: {
      ...commonMeta,
    },
  },
  {
    path: '/auth/register',
    exact: true,
    component: Register,
    meta: {
      ...commonMeta,
    },
  },
  {
    path: '/auth/reset-password',
    exact: true,
    component: ResetPassword,
    meta: {
      ...commonMeta,
    },
  },
  {
    path: '/auth/reset-password/confirm',
    exact: true,
    component: ResetPasswordConfirm,
    meta: {
      ...commonMeta,
    },
  },
  {
    path: '/auth/reset-password/success',
    exact: true,
    component: ResetPasswordSuccess,
    meta: {
      ...commonMeta,
    },
  },
  {
    path: '/error/404',
    exact: true,
    component: Error404,
    meta: {
      ...commonMeta,
    },
  },
];

export default routes;