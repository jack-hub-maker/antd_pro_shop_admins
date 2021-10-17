/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-12 09:56:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-13 14:41:24
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\services\login.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};

/**
 * 执行登陆 获取token
 * @param params 
 * @returns 
 */
export async function fakeAccountLogin(data: LoginParamsType) {
  return request('/auth/login', {
    method: 'POST',
    data,
  });
}

/**
 * 退出登陆
 * @param params 
 * @returns 
 */
export async function logout() {
  return request.post('/auth/logout');
}

