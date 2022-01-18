/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2022-01-18 17:07:01
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 17:07:01
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/services/index.ts
 * Copyright 2022 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
import { stringify } from 'querystring';

// 查询当前表格的表头宽度
export async function getTableColumnsWidth(params:any) {
    return request.get(`/public/header/query`, {
      params,
    });
  }
  
  // 保存表格的表头宽度信息
  export async function saveTableColumnsWidth(data:any) {
    return request.post(`/public/header?${stringify(data)}`, {
      data,
    });
  }