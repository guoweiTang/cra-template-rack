/*
 * @Author: your name
 * @Date: 2020-12-14 18:45:04
 * @LastEditTime: 2020-12-14 18:53:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/views/service.js
 */
// import request from '@/utils/request';

/**
 * service相关接口
 */
export function getAllServices(params = {}) {
  return new Promise(resolve => resolve({
    status: 200,
    data: {"count":11,"results":[{"id":"aPE6DlkD","title":"wlytest1","version":"0.0.1"},{"id":"b9RpYEPa","title":"Apis Editor Backend API Document","version":"0.1.0"},{"id":"OZE8QKMA","title":"用友累死了","version":"0.0.1"},{"id":"ZzEGBR8J","title":"自定义服务3","version":"0.0.1"},{"id":"ZdEb3Kj8","title":"用友累死了","version":"0.0.1"},{"id":"a0RL3l8p","title":"自定义服务4","version":"0.0.1"},{"id":"YqlaNRV3","title":"自定义服务2","version":"0.0.1"},{"id":"ZxRyGKAD","title":"自定义服务5","version":"0.0.1"},{"id":"VWlkpR1a","title":"自定义服务6","version":"0.0.1"},{"id":"3bEmOlZk","title":"Swagger Petstore","version":"1.0.0"},{"id":"D2l4GK3y","title":"鹏飞服务","version":"0.0.2"}]}
  }))

  // return request('/svc', {
  //   params,
  // });
}

export function addService(params = {}) {
  return new Promise(resolve => resolve({
    status: 200,
    data: {},
  }));
  // return request('/svc', {
  //   method: 'POST',
  //   data: {
  //     ...params,
  //   },
  // });
}

export function updateService(pathParams, params = {}) {
  return new Promise(resolve => resolve({
    status: 200,
    data: {},
  }));
  // const { serviceId } = pathParams;
  // return request(`/svc/${serviceId}`, {
  //   method: 'PUT',
  //   data: {
  //     ...params,
  //   },
  // });
}

export function deleteService(pathParams, params = {}) {
  return new Promise(resolve => resolve({
    status: 200,
    data: {},
  }));
  // const { serviceId } = pathParams;
  // return request(`/svc/${serviceId}`, {
  //   method: 'DELETE',
  //   data: {
  //     ...params,
  //   },
  // });
}
