import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
};
/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
export interface CmsUserLoginRequest {
    username: string;
    password: string;
}
/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
export interface CmsUserLoginResponse {
    access_token: string;
    refresh_token: string;
}
/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
export declare const cmsUserLogin: {
    (requestData: CmsUserLoginRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<CmsUserLoginResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/cms/user/login", "data", string, string, false>;
};
/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
export interface CmsUserInformationRequest {
}
/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
export interface CmsUserInformationResponse {
    access_token: string;
    refresh_token: string;
}
/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
export declare const cmsUserInformation: {
    (requestData?: CmsUserInformationRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<CmsUserInformationResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/cms/user/information", "data", string, string, true>;
};
/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
export interface SysUserPageRequest {
    count?: string;
    page?: string;
    /**
     * 是不是业务员
     */
    salesman_flag?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 业务员手机号
     */
    mobile?: string;
}
/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
export interface SysUserPageResponse {
    total?: number;
    count?: number;
    page?: number;
    total_page?: number;
    items?: {
        id: number;
        /**
         * 用户名
         */
        username: string;
        /**
         * 昵称
         */
        nickname: null;
        /**
         * 头像url
         */
        avatar: null;
        /**
         * 邮箱
         */
        email: null;
        /**
         * 小程序openid
         */
        openid: string;
        /**
         * 是不是业务员 0:不是 1:是
         */
        salesman_flag: number;
        /**
         * 业务员手机号
         */
        mobile: string;
        /**
         * 业务员姓名
         */
        real_name: string;
        /**
         * 数据权限
         */
        data_filter: null;
    }[];
}
/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
export declare const sysUserPage: {
    (requestData: SysUserPageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysUserPageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sysUser/page", "data", string, "count" | "page" | "salesman_flag" | "username" | "mobile", false>;
};
/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
export interface SysUserIdRequest {
    id: string;
}
/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
export interface SysUserIdResponse {
    id?: number;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 头像url
     */
    avatar?: null;
    /**
     * 邮箱
     */
    email?: null;
    /**
     * 微信小程序openid
     */
    openid?: null;
    /**
     * 是不是业务员
     */
    salesman_flag?: number;
    /**
     * 业务员手机号
     */
    mobile?: string;
    /**
     * 业务员姓名
     */
    real_name?: string;
    /**
     * 数据权限
     */
    data_filter?: string;
}
/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
export declare const sysUserId: {
    (requestData: SysUserIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysUserIdResponse>;
    requestConfig: any;
};
/**
 * 接口 [修改用户信息↗](https://doc.jsxygkj.com/project/259/interface/api/7404) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `PUT /sysUser/{id}`
 * @更新时间 `2021-11-24 10:40:41`
 */
export interface SysUserIdRequest {
    /**
     * 用户名
     */
    username: string;
    /**
     * 用户昵称
     */
    nickname: string;
    /**
     * 头像url
     */
    avatar: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 是不是业务员 0:不是 1:是
     */
    salesman_flag: string;
    /**
     * 业务员手机号
     */
    mobile: string;
    /**
     * 业务员姓名
     */
    real_name: string;
    /**
     * 数据隔离
     */
    data_filter: string;
    id: string;
}
/**
 * 接口 [修改用户信息↗](https://doc.jsxygkj.com/project/259/interface/api/7404) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `PUT /sysUser/{id}`
 * @更新时间 `2021-11-24 10:40:41`
 */
export interface SysUserIdResponse {
}
/**
 * 接口 [修改用户信息↗](https://doc.jsxygkj.com/project/259/interface/api/7404) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `PUT /sysUser/{id}`
 * @更新时间 `2021-11-24 10:40:41`
 */
export declare const sysUserId: {
    (requestData: SysUserIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysUserIdResponse>;
    requestConfig: any;
};
/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
export interface CmsUserPermissionsRequest {
}
/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
export interface CmsUserPermissionsResponse {
}
/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
export declare const cmsUserPermissions: {
    (requestData?: CmsUserPermissionsRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<CmsUserPermissionsResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/cms/user/permissions", "data", string, string, true>;
};
/**
 * 接口 [新增用户↗](https://doc.jsxygkj.com/project/259/interface/api/7754) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /sysUser`
 * @更新时间 `2021-12-21 18:05:36`
 */
export interface SysUserRequest {
    /**
     * 用户名
     */
    username: string;
    /**
     * 昵称
     */
    nickname: string;
    /**
     * 邮箱
     */
    email: string;
    /**
     * 数据权限
     */
    data_filter: string;
}
/**
 * 接口 [新增用户↗](https://doc.jsxygkj.com/project/259/interface/api/7754) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /sysUser`
 * @更新时间 `2021-12-21 18:05:36`
 */
export interface SysUserResponse {
}
/**
 * 接口 [新增用户↗](https://doc.jsxygkj.com/project/259/interface/api/7754) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /sysUser`
 * @更新时间 `2021-12-21 18:05:36`
 */
export declare const sysUser: {
    (requestData: SysUserRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysUserResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sysUser", "data", string, string, false>;
};
/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **请求类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
export interface StorePageRequest {
    count?: string;
    page?: string;
    /**
     * 地址
     */
    location?: string;
    /**
     * 店名
     */
    bs_name?: string;
    /**
     * 务员姓名
     */
    people_name?: string;
    /**
     * 业务员电话
     */
    people_phone?: string;
    /**
     * 省行政编码
     */
    province_code?: string;
    /**
     * 市行政编码
     */
    city_code?: string;
    /**
     * 区县行政编码
     */
    county_code?: string;
}
/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **返回类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
export interface StorePageResponse {
}
/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **请求函数**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
export declare const storePage: {
    (requestData: StorePageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<StorePageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/store/page", "data", string, "location" | "count" | "page" | "bs_name" | "people_name" | "people_phone" | "province_code" | "city_code" | "county_code", false>;
};
/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **请求类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
export interface StoreIdRequest {
    id: string;
}
/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **返回类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
export interface StoreIdResponse {
    id?: number;
    /**
     * 门店名称
     */
    bs_name?: string;
    /**
     * 区县
     */
    county?: null;
    /**
     * 区县编码
     */
    county_code?: null;
    /**
     * 市
     */
    city?: null;
    /**
     * 市编码
     */
    city_code?: null;
    /**
     * 省
     */
    province?: null;
    /**
     * 省编码
     */
    province_code?: null;
    /**
     * 备注
     */
    remarks?: null;
    /**
     * 详细地址
     */
    location?: string;
    /**
     * 店主电话
     */
    phone?: string;
    /**
     * 业务员姓名
     */
    people_name?: null;
    /**
     * 业务员电话
     */
    people_phone?: null;
    /**
     * NFC标号
     */
    nfc_uid: string;
    /**
     * 在售商品列表
     */
    sku_list: {
        /**
         * 商品id
         */
        id: string;
        /**
         * 商品名称
         */
        name: string;
    }[];
}
/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **请求函数**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
export declare const storeId: {
    (requestData: StoreIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<StoreIdResponse>;
    requestConfig: any;
};
/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **请求类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
export interface StoreIdRequest {
    id: string;
}
/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **返回类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
export interface StoreIdResponse {
}
/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **请求函数**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
export declare const storeId: {
    (requestData: StoreIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<StoreIdResponse>;
    requestConfig: any;
};
/**
 * 接口 [行政区划↗](https://doc.jsxygkj.com/project/259/interface/api/5087) 的 **请求类型**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/linkage`
 * @更新时间 `2021-09-15 10:30:47`
 */
export interface SysAreaLinkageRequest {
}
/**
 * 接口 [行政区划↗](https://doc.jsxygkj.com/project/259/interface/api/5087) 的 **返回类型**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/linkage`
 * @更新时间 `2021-09-15 10:30:47`
 */
export interface SysAreaLinkageResponse {
}
/**
 * 接口 [行政区划↗](https://doc.jsxygkj.com/project/259/interface/api/5087) 的 **请求函数**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/linkage`
 * @更新时间 `2021-09-15 10:30:47`
 */
export declare const sysAreaLinkage: {
    (requestData?: SysAreaLinkageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysAreaLinkageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sysArea/linkage", "data", string, string, true>;
};
/**
 * 接口 [区域列表↗](https://doc.jsxygkj.com/project/259/interface/api/5094) 的 **请求类型**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/page`
 * @更新时间 `2021-09-15 11:34:56`
 */
export interface SysAreaPageRequest {
    count: string;
    page: string;
}
/**
 * 接口 [区域列表↗](https://doc.jsxygkj.com/project/259/interface/api/5094) 的 **返回类型**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/page`
 * @更新时间 `2021-09-15 11:34:56`
 */
export interface SysAreaPageResponse {
}
/**
 * 接口 [区域列表↗](https://doc.jsxygkj.com/project/259/interface/api/5094) 的 **请求函数**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/page`
 * @更新时间 `2021-09-15 11:34:56`
 */
export declare const sysAreaPage: {
    (requestData: SysAreaPageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysAreaPageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sysArea/page", "data", string, "count" | "page", false>;
};
/**
 * 接口 [区域详情↗](https://doc.jsxygkj.com/project/259/interface/api/5101) 的 **请求类型**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/{id}`
 * @更新时间 `2021-09-15 11:35:02`
 */
export interface SysAreaIdRequest {
    id: string;
}
/**
 * 接口 [区域详情↗](https://doc.jsxygkj.com/project/259/interface/api/5101) 的 **返回类型**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/{id}`
 * @更新时间 `2021-09-15 11:35:02`
 */
export interface SysAreaIdResponse {
}
/**
 * 接口 [区域详情↗](https://doc.jsxygkj.com/project/259/interface/api/5101) 的 **请求函数**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/{id}`
 * @更新时间 `2021-09-15 11:35:02`
 */
export declare const sysAreaId: {
    (requestData: SysAreaIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SysAreaIdResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sysArea/{id}", "data", "id", string, false>;
};
/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
export interface SkuPageRequest {
    count: string;
    page: string;
    /**
     * 品种名称
     */
    sku_name: string;
}
/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
export interface SkuPageResponse {
}
/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
export declare const skuPage: {
    (requestData: SkuPageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SkuPageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sku/page", "data", string, "count" | "page" | "sku_name", false>;
};
/**
 * 接口 [添加品种↗](https://doc.jsxygkj.com/project/259/interface/api/5199) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `POST /sku`
 * @更新时间 `2021-09-16 17:40:36`
 */
export interface SkuRequest {
    /**
     * 品种编码
     */
    code: string;
    /**
     * 品种名称
     */
    name: string;
    /**
     * 备注
     */
    remarks: string;
}
/**
 * 接口 [添加品种↗](https://doc.jsxygkj.com/project/259/interface/api/5199) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `POST /sku`
 * @更新时间 `2021-09-16 17:40:36`
 */
export interface SkuResponse {
}
/**
 * 接口 [添加品种↗](https://doc.jsxygkj.com/project/259/interface/api/5199) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `POST /sku`
 * @更新时间 `2021-09-16 17:40:36`
 */
export declare const sku: {
    (requestData: SkuRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SkuResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/sku", "data", string, string, false>;
};
/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
export interface SkuIdRequest {
    id: string;
}
/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
export interface SkuIdResponse {
    id?: number;
    /**
     * 品种编码
     */
    code?: string;
    /**
     * 品种名称
     */
    name?: string;
    /**
     * 备注
     */
    remarks?: string;
}
/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
export declare const skuId: {
    (requestData: SkuIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SkuIdResponse>;
    requestConfig: any;
};
/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
export interface SkuIdRequest {
    id: string;
}
/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
export interface SkuIdResponse {
}
/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
export declare const skuId: {
    (requestData: SkuIdRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<SkuIdResponse>;
    requestConfig: any;
};
/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **请求类型**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
export interface ClockInPageRequest {
    count?: string;
    page?: string;
    /**
     * 店名
     */
    bs_name?: string;
    /**
     * NFC编号
     */
    nfc_uid?: string;
    /**
     * 开始时间
     */
    start?: string;
    /**
     * 结束时间
     */
    end?: string;
}
/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **返回类型**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
export interface ClockInPageResponse {
    total?: number;
    count?: number;
    page?: number;
    total_page?: number;
    items?: {
        /**
         * 序号
         */
        id?: number;
        /**
         * 门店名称
         */
        store_name?: string;
        /**
         * NFC标号
         */
        nfc_uid?: string;
        /**
         * 备注
         */
        remarks?: string;
        /**
         * 省
         */
        province?: string;
        /**
         * 市
         */
        city?: string;
        /**
         * 区
         */
        county?: null;
        /**
         * 地址
         */
        location?: string;
        /**
         * 业务员姓名
         */
        people_name?: string;
        /**
         * 业务员手机号
         */
        people_phone?: string;
        /**
         * 记录产品数量
         */
        sku_num?: number;
        /**
         * 打卡时间
         */
        create_time?: string;
        /**
         * 格式化好的打卡时间
         */
        create_time_str: string;
        /**
         * 记录产品名称
         */
        sku_list?: {
            /**
             * 商品名称
             */
            sku_name: string;
            /**
             * 记录数量
             */
            num: string;
        }[];
    }[];
}
/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **请求函数**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
export declare const clockInPage: {
    (requestData: ClockInPageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<ClockInPageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/clockIn/page", "data", string, "end" | "start" | "count" | "page" | "bs_name" | "nfc_uid", false>;
};
/**
 * 接口 [销售分析↗](https://doc.jsxygkj.com/project/259/interface/api/5262) 的 **请求类型**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockinDetail/statistics`
 * @更新时间 `2021-10-13 15:01:49`
 */
export interface ClockinDetailStatisticsRequest {
    /**
     * 统计年份
     */
    year: string;
}
/**
 * 接口 [销售分析↗](https://doc.jsxygkj.com/project/259/interface/api/5262) 的 **返回类型**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockinDetail/statistics`
 * @更新时间 `2021-10-13 15:01:49`
 */
export type ClockinDetailStatisticsResponse = {
    /**
     * id
     */
    id: number;
    /**
     * 品名
     */
    sku_name: string;
    /**
     * 1月
     */
    m1: number;
    /**
     * 2月
     */
    m2: number;
    /**
     * 3月
     */
    m3: number;
    /**
     * 4月
     */
    m4: number;
    /**
     * 5月
     */
    m5: number;
    /**
     * 6月
     */
    m6: number;
    /**
     * 7月
     */
    m7: number;
    /**
     * 8月
     */
    m8: number;
    /**
     * 9月
     */
    m9: number;
    /**
     * 10月
     */
    m10: number;
    /**
     * 11月
     */
    m11: number;
    /**
     * 12月
     */
    m12: number;
    /**
     * 合计
     */
    all: number;
}[];
/**
 * 接口 [销售分析↗](https://doc.jsxygkj.com/project/259/interface/api/5262) 的 **请求函数**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockinDetail/statistics`
 * @更新时间 `2021-10-13 15:01:49`
 */
export declare const clockinDetailStatistics: {
    (requestData: ClockinDetailStatisticsRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<ClockinDetailStatisticsResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/clockinDetail/statistics", "data", string, "year", false>;
};
/**
 * 接口 [生成随机店铺↗](https://doc.jsxygkj.com/project/259/interface/api/5241) 的 **请求类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/store`
 * @更新时间 `2021-09-24 17:00:05`
 */
export interface TestInitStoreRequest {
    /**
     * 生成次数
     */
    num?: string;
}
/**
 * 接口 [生成随机店铺↗](https://doc.jsxygkj.com/project/259/interface/api/5241) 的 **返回类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/store`
 * @更新时间 `2021-09-24 17:00:05`
 */
export interface TestInitStoreResponse {
}
/**
 * 接口 [生成随机店铺↗](https://doc.jsxygkj.com/project/259/interface/api/5241) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/store`
 * @更新时间 `2021-09-24 17:00:05`
 */
export declare const testInitStore: {
    (requestData: TestInitStoreRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<TestInitStoreResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/test/init/store", "data", string, "num", false>;
};
/**
 * 接口 [生成随机业务员↗](https://doc.jsxygkj.com/project/259/interface/api/5248) 的 **请求类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/user`
 * @更新时间 `2021-09-24 17:00:33`
 */
export interface TestInitUserRequest {
    /**
     * 生成次数
     */
    num?: string;
}
/**
 * 接口 [生成随机业务员↗](https://doc.jsxygkj.com/project/259/interface/api/5248) 的 **返回类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/user`
 * @更新时间 `2021-09-24 17:00:33`
 */
export interface TestInitUserResponse {
}
/**
 * 接口 [生成随机业务员↗](https://doc.jsxygkj.com/project/259/interface/api/5248) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/user`
 * @更新时间 `2021-09-24 17:00:33`
 */
export declare const testInitUser: {
    (requestData: TestInitUserRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<TestInitUserResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/test/init/user", "data", string, "num", false>;
};
/**
 * 接口 [生成随机打卡↗](https://doc.jsxygkj.com/project/259/interface/api/5255) 的 **请求类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/clock`
 * @更新时间 `2021-09-24 17:00:28`
 */
export interface TestInitClockRequest {
    /**
     * 生成的打卡年份
     */
    year: string;
    /**
     * 生成次数
     */
    num?: string;
}
/**
 * 接口 [生成随机打卡↗](https://doc.jsxygkj.com/project/259/interface/api/5255) 的 **返回类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/clock`
 * @更新时间 `2021-09-24 17:00:28`
 */
export interface TestInitClockResponse {
}
/**
 * 接口 [生成随机打卡↗](https://doc.jsxygkj.com/project/259/interface/api/5255) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/clock`
 * @更新时间 `2021-09-24 17:00:28`
 */
export declare const testInitClock: {
    (requestData: TestInitClockRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<TestInitClockResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/test/init/clock", "data", string, "year" | "num", false>;
};
/**
 * 接口 [生成随机订货↗](https://doc.jsxygkj.com/project/259/interface/api/10862) 的 **请求类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/order`
 * @更新时间 `2022-02-16 12:17:13`
 */
export interface TestInitOrderRequest {
    /**
     * 生成的打卡年份
     */
    year: string;
    /**
     * 生成次数
     */
    num?: string;
}
/**
 * 接口 [生成随机订货↗](https://doc.jsxygkj.com/project/259/interface/api/10862) 的 **返回类型**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/order`
 * @更新时间 `2022-02-16 12:17:13`
 */
export interface TestInitOrderResponse {
}
/**
 * 接口 [生成随机订货↗](https://doc.jsxygkj.com/project/259/interface/api/10862) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/order`
 * @更新时间 `2022-02-16 12:17:13`
 */
export declare const testInitOrder: {
    (requestData: TestInitOrderRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<TestInitOrderResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/test/init/order", "data", string, "year" | "num", false>;
};
/**
 * 接口 [大屏接口↗](https://doc.jsxygkj.com/project/259/interface/api/5619) 的 **请求类型**
 *
 * @分类 [数据统计↗](https://doc.jsxygkj.com/project/259/interface/api/cat_623)
 * @请求头 `GET /statistic`
 * @更新时间 `2021-09-24 15:44:09`
 */
export interface StatisticRequest {
}
/**
 * 接口 [大屏接口↗](https://doc.jsxygkj.com/project/259/interface/api/5619) 的 **返回类型**
 *
 * @分类 [数据统计↗](https://doc.jsxygkj.com/project/259/interface/api/cat_623)
 * @请求头 `GET /statistic`
 * @更新时间 `2021-09-24 15:44:09`
 */
export interface StatisticResponse {
    /**
     * 地图统计
     */
    areaDataList?: {
        /**
         * 本月填报数量
         */
        monthCloclInNum: number;
        /**
         * 业务员数量
         */
        peopleNum: number;
        /**
         * 区域（省）
         */
        province: string;
        /**
         * 销售点数量
         */
        storeNum: number;
        /**
         * 经纬度数组
         */
        position: string[];
    }[];
    /**
     * 各区域销售点数量对比统计(前8)
     */
    locationSaleNumList?: {
        /**
         * 销售点数量
         */
        num: string;
        /**
         * 区域名称
         */
        province: string;
    }[];
    /**
     * 本月登记数量
     */
    monthClockInNum?: number;
    /**
     * (当月)每日业务员跑点数量
     */
    peopleClockInNumList?: {
        /**
         * 时间（天）
         */
        cday: string;
        /**
         * 跑点数量
         */
        num: number;
    }[];
    /**
     * 业务员跑点比例排行(前5)
     */
    peoplePercentList?: {
        /**
         * 业务员名字
         */
        peopleName: string;
        /**
         * 跑点占比
         */
        percent: string;
    }[];
    /**
     * 热销品种排行(前5)
     */
    skuSaleNumList?: {
        /**
         * 销售数量
         */
        num: number;
        /**
         * 品名
         */
        skuName: string;
    }[];
    /**
     * 热销品种占比(前5)
     */
    skuSalePerList?: {
        /**
         * 销售比例
         */
        per: number;
        /**
         * 品名
         */
        skuName: string;
    }[];
    /**
     * 销售点数量
     */
    storeNum?: number;
    /**
     * 按月统计品种销量
     */
    yearSkuSale?: {
        /**
         * 品种1名称
         */
        sku1Name?: string;
        /**
         * 品种2名称
         */
        sku2Name?: string;
        /**
         * 品种3名称
         */
        sku3Name?: string;
        /**
         * 销售明细
         */
        skuSaleInfos?: {
            /**
             * 月份
             */
            month: string;
            /**
             * 品种1销量
             */
            sku1Num: number;
            /**
             * 品种2销量
             */
            sku2Num: number;
            /**
             * 品种3销量
             */
            sku3Num: number;
        }[];
    };
}
/**
 * 接口 [大屏接口↗](https://doc.jsxygkj.com/project/259/interface/api/5619) 的 **请求函数**
 *
 * @分类 [数据统计↗](https://doc.jsxygkj.com/project/259/interface/api/cat_623)
 * @请求头 `GET /statistic`
 * @更新时间 `2021-09-24 15:44:09`
 */
export declare const statistic: {
    (requestData?: StatisticRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<StatisticResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/statistic", "data", string, string, true>;
};
/**
 * 接口 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/10239) 的 **请求类型**
 *
 * @分类 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_732)
 * @请求头 `GET /order/page`
 * @更新时间 `2022-02-10 11:30:48`
 */
export interface OrderPageRequest {
    count?: string;
    page?: string;
    /**
     * 店名
     */
    bs_name?: string;
    /**
     * NFC编号
     */
    nfc_uid?: string;
    /**
     * 开始时间
     */
    start?: string;
    /**
     * 结束时间
     */
    end?: string;
}
/**
 * 接口 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/10239) 的 **返回类型**
 *
 * @分类 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_732)
 * @请求头 `GET /order/page`
 * @更新时间 `2022-02-10 11:30:48`
 */
export interface OrderPageResponse {
    total?: number;
    count?: number;
    page?: number;
    total_page?: number;
    items?: {
        /**
         * 序号
         */
        id?: number;
        /**
         * 门店名称
         */
        store_name?: string;
        /**
         * NFC标号
         */
        nfc_uid?: string;
        /**
         * 备注
         */
        remarks?: string;
        /**
         * 省
         */
        province?: string;
        /**
         * 市
         */
        city?: string;
        /**
         * 区
         */
        county?: null;
        /**
         * 地址
         */
        location?: string;
        /**
         * 店主姓名
         */
        people_name?: string;
        /**
         * 店主手机号
         */
        people_phone?: string;
        /**
         * 记录产品数量
         */
        sku_num?: number;
        /**
         * 打卡时间
         */
        create_time?: string;
        /**
         * 格式化好的打卡时间
         */
        create_time_str: string;
        /**
         * 记录产品名称
         */
        sku_list?: {
            /**
             * 商品名称
             */
            sku_name: string;
            /**
             * 记录数量
             */
            num: string;
        }[];
    }[];
}
/**
 * 接口 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/10239) 的 **请求函数**
 *
 * @分类 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_732)
 * @请求头 `GET /order/page`
 * @更新时间 `2022-02-10 11:30:48`
 */
export declare const orderPage: {
    (requestData: OrderPageRequest, ...args: RequestFunctionRestArgs<typeof request>): Promise<OrderPageResponse>;
    requestConfig: RequestConfig<"https://doc.jsxygkj.com/mock/259", "", "", "/order/page", "data", string, "end" | "start" | "count" | "page" | "bs_name" | "nfc_uid", false>;
};
