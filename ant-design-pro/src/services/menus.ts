/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-19 17:05:39
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 17:05:39
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/services/menus.ts
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
//获取订单列表
export async function getMenus(params: any): Promise<any> {
  return request('/admin/menus', { params });
}