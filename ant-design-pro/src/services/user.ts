/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-12 09:56:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-13 20:20:58
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\services\user.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}

//获取当前登陆用户信息
export async function queryCurrent(): Promise<any> {
  return request('/admin/user');
}

//获取用户列表
export async function getUsers(params: any): Promise<any> {
  return request('/admin/users', { params });
}
//禁用启用
export async function lockUser(uid: any): Promise<any> {
  return request.patch(`/admin/users/${uid}/lock`);
}
//添加用户
export async function addUser(params: any): Promise<any> {
  return request.post('/admin/users',{params});
}
//编辑用户信息
export async function showUser(editId: any): Promise<any> {
  return request(`/admin/users/${editId}`);
}

//更新用户
export async function updateUser(uid: any,params:any): Promise<any> {
  return request.put(`/admin/users/${uid}`,{params});
}
