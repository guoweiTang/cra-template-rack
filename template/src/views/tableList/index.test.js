/*
 * @Author: your name
 * @Date: 2020-12-16 19:43:13
 * @LastEditTime: 2020-12-21 16:13:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/views/index.test.js
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import request from 'supertest';

import { BASEURL } from '../../config';
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

  expect(getByText('create project')).toBeInTheDocument();
});

describe('page tableList interface test', () => {
  let serviceId;
  it('get service list', (done) => {
    request(BASEURL)
      .get('/svc')
      .expect(200, done);
  });
  it('add service', (done) => {
    request(BASEURL)
      .post('/svc')
      .send({
        title: 'Jest test',
        version: '1.0.0',
      })
      .expect(200)
      .then(res => {
        serviceId = res.body.id;
        done();
      })
      .catch(done);
  });
  it('update service', (done) => {
    request(BASEURL)
      .put(`/svc/${serviceId}`)
      .send({
        title: 'Jest test again',
        version: '2.0.0',
      })
      .expect(200, done)
  });
  it('delete service', (done) => {
    request(BASEURL)
      .delete(`/svc/${serviceId}`)
      .expect(200, done)
  });
})


