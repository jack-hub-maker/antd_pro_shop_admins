/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-19 16:52:22
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-19 16:52:23
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/services/comment.ts
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
//获取订单列表
export async function getComment(params: any): Promise<any> {
  return request('/admin/comments', { params });
}