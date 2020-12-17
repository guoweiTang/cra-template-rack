/*
 * @Author: your name
 * @Date: 2020-12-16 19:43:13
 * @LastEditTime: 2020-12-17 18:51:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/views/index.test.js
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store';
import App from './index';

/**
 * 冒烟测试
 */
it('renders page tableList', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('创建项目')).toBeInTheDocument();
});
