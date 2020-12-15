/*
 * @Author: your name
 * @Date: 2020-12-14 18:03:16
 * @LastEditTime: 2020-12-15 19:21:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';

import '@/index.scss';
import Views from '@/views';
import reportWebVitals from '@/reportWebVitals';

if (process.env.REACT_APP_MOCK === 'true'){
  import('./mock/db').then(() => {
    ReactDOM.render(<Views />, document.getElementById('root'));
  })
} else {
  ReactDOM.render(<Views />, document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
