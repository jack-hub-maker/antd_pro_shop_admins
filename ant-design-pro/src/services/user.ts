/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-12 09:56:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 16:27:29
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/services/user.ts
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
export async function addUser(data: any): Promise<any> {
  return request.post('/admin/users',{data});
}
//编辑获取用户信息
export async function showUser(editId: any): Promise<any> {
  return request(`/admin/users/${editId}`);
}

//更新用户
export async function updateUser(uid: any,data:any): Promise<any> {
  return request.put(`/admin/users/${uid}`,{data});
}

//用户头像
export async function updateAvatar(data:any): Promise<any> {
  return request.patch(`/user/avatar`,{data});
}
