/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-12 09:56:49
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-12 13:22:03
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\services\user.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';

//获取当前登陆用户信息
export async function queryCurrent(): Promise<any> {
  return request('/admin/user');
}
