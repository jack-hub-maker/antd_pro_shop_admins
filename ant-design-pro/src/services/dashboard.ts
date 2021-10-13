/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-13 15:05:37
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-13 15:06:43
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\services\dashboard.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
/**
 * 获取面板数据
 * @returns 
 */
export async function fetchDashboard(): Promise<any> {
  return request('/admin/index');
}