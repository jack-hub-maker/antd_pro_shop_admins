/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-18 10:47:53
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2021-10-28 15:43:23
 * @FilePath: \antd_pro_shop_admins\ant-design-pro\src\services\category.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
//获取分类列表-非禁用的分类
export async function getCategory(params?: any): Promise<any> {
    return request('/admin/category', { params });
}

