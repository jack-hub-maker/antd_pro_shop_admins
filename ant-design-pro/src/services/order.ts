/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: YingJie Xing
 * @Date: 2021-10-29 16:42:51
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 17:30:15
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/services/order.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
//获取订单列表
export async function getOrders(params: any): Promise<any> {
  return request('/admin/orders', { params });
}
//获取订单详情 inlude可以返回额外的数据， 多个使用 ， 分隔， 比如： include=goods,user,orderDetails
export async function detailOrders(order: any): Promise<any> {
  return request(`/admin/orders/${order}?include=goods,orderDetails`);
}
