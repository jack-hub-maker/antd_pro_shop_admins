/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: YingJie Xing
 * @Date: 2021-10-29 16:42:51
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-29 16:46:41
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\services\order.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
//获取订单列表
export async function getOrders(params: any): Promise<any> {
    return request('/admin/orders', { params });
  }
//   //禁用启用
//   export async function lockUser(uid: any): Promise<any> {
//     return request.patch(`/admin/users/${uid}/lock`);
//   }
//   //添加用户
//   export async function addUser(data: any): Promise<any> {
//     return request.post('/admin/users',{data});
//   }
