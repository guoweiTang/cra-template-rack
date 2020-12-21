/*
 * @Author: your name
 * @Date: 2020-12-07 11:54:50
 * @LastEditTime: 2020-12-21 15:49:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /apis-webuser/src/utils/index.js
 */
import { Names } from '../config';
export function getRandomName() {
  return Names[Math.floor(Math.random() * 6)];
}
