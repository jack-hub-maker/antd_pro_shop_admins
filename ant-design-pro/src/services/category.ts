/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 
 * @Date: 2021-10-18 10:47:53
 * @LastEditors: YingJie Xing
 * @LastEditTime: 2022-01-18 16:39:53
 * @FilePath: /antd_pro_shop_admins/ant-design-pro/src/services/category.ts
 * Copyright 2021 YingJie Xing, All Rights Reserved. 
 */
import request from '@/utils/request';
//获取分类列表-非禁用的分类
export async function getCategory(params?: any): Promise<any> {
    return request('/admin/category', { params });
}

//分类添加
/**
参数名	必选	类型	说明
name	是	string	名称
pid	否	int	父级id， 不传为顶级分类
 */
export async function addCategory(params?: any): Promise<any> {
    return request.post('/admin/category', { params });
}

//分类更新
/**
参数名	必选	类型	说明
name	是	string	名称
pid	否	int	父级id， 不传为顶级分类
 */
export async function updateCategory(category?: any, params?: any): Promise<any> {
    return request.put(`/admin/category/${category}`, { params });
}
// export async function updateCategory(category?: any): Promise<any> {
//     return request.put(`/admin/category/name=${category}`);
// }
//编辑获取分类信息
/*
参数名	必选	类型	说明
category	是	int	分类ID
 */
export async function detailCategory(category: any): Promise<any> {
    return request(`/admin/category/${category}`);
}

//禁用分类
export async function isStatus(category: any): Promise<any> {
    return request.patch(`/admin/category/${category}/status`);
}