/*
 * @Author: ice
 * @Date: 2020-12-21 17:48:58
 * @LastEditTime: 2020-12-21 17:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/views/service.test.js
 */
import request from 'supertest';

import { BASEURL } from '../config';
describe('interface test', () => {
  let serviceId;
  it('get service list', (done) => {
    request(BASEURL).get('/svc').expect(200, done);
  });
  it('add service', (done) => {
    request(BASEURL)
      .post('/svc')
      .send({
        title: 'Jest test',
        version: '1.0.0',
      })
      .expect(200)
      .then((res) => {
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
      .expect(200, done);
  });
  it('delete service', (done) => {
    request(BASEURL).delete(`/svc/${serviceId}`).expect(200, done);
  });
});
