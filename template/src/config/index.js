// 运行环境配置项
let settings;
export function getSettings() {
  return settings;
}
export function setSettings(val) {
  settings = val;
}
const MOCK = process.env.REACT_APP_MOCK === 'true';

export const BASEURL = MOCK ? '/' : 'https://examples.com';
export const token = {
  accessTokenValue: 'ACCESS_TOKEN_USER',
  refreshTokenValue: 'REFRESH_TOKEN_USER',
};
export const Colors = [
  'green',
  'gold',
  'volcano',
  'orange',
  'red',
  'geekblue',
  'cyan',
  'blue',
];
export const emailPattern = /^\w+@\w+\.\w+(\.\w+)?$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*\d)[^]{6,20}$/;
