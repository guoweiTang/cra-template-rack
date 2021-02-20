/*
 * @Author: your name
 * @Date: 2020-12-16 15:08:39
 * @LastEditTime: 2020-12-23 20:48:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/store/user.js
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  id: -1,
  lab: {
    id: -1,
    name: '',
    is_active: false,
  },
  is_active: false,
  can_manage_ana_tools: false,
  name: '',
  role: '',
};

const sliceVal = {
  name: 'user',
  initialState,
  reducers: {
    updataInfo: (state, action) => {
      const data = action.payload;
      state.email = data.email;
      state.id = data.id;
      state.lab = data.lab;
      state.is_active = data.is_active;
      state.can_manage_ana_tools = data.can_manage_ana_tools;
      state.name = data.name;
      state.role = data.role;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateLabName: (state, action) => {
      state.lab.name = action.payload;
    },
  },
};

const userSlice = createSlice(sliceVal);
export const { updataInfo, updateName, updateLabName } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
