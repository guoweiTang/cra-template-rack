/*
 * @Author: your name
 * @Date: 2020-12-16 15:08:39
 * @LastEditTime: 2020-12-16 16:30:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/store/user.js
 */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'tang',
    age: 18,
  },
  reducers: {
    addAge: (state) => {
      state.age++;
    },
    reName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { addAge, reName } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
