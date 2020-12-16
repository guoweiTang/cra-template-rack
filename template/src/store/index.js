/*
 * @Author: your name
 * @Date: 2020-12-16 16:35:59
 * @LastEditTime: 2020-12-16 16:36:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/store/index.js
 */
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
