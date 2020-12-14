/*
 * @Author: your name
 * @Date: 2020-12-07 11:54:50
 * @LastEditTime: 2020-12-07 11:59:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /apis-webuser/src/utils/index.js
 */
import { httpMethods } from '@/config';

/**
 * 根据请求方法获取tag颜色
 * @param {string} method 
 */
export function getColorByMethod (method) {
  let color;
  switch (method.toLowerCase()) {
    case httpMethods[0]:
      color = 'green'
      break;
    case httpMethods[1]:
      color = 'gold'
      break;
    case httpMethods[2]:
      color = 'volcano'
      break;
    case httpMethods[3]:
      color = 'orange'
      break;
    case httpMethods[4]:
      color = 'red'
      break;
    case httpMethods[5]:
      color = 'geekblue'
      break;
    case httpMethods[6]:
      color = 'cyan'
      break;
    case httpMethods[7]:
      color = 'blue'
      break;
    default:
      color = 'green'
  }
  return color;
}