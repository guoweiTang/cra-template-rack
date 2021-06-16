/*
 * @Description: 加载所有路由
 * @Author: tangguowei
 * @Date: 2021-06-16 11:30:35
 * @LastEditors: tangguowei
 * @LastEditTime: 2021-06-16 14:15:45
 */
// 所有路由数组
const routes = [];
// 动态加载路由
const modulesFiles = require.context('./modules', true, /\.js$/);
for(let modulePath of modulesFiles.keys()) {
	const value = modulesFiles(modulePath);
	//判断是否为数组路由
	if(value.default.length || value.default.length ===0){
		routes.push(...value.default);
	}else{
		routes.push(value.default);
	}
};

export default routes;