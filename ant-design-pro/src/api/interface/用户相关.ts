/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore

/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
export interface UserPermissionsRequest {}

/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
export interface UserPermissionsResponse {}

/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
export interface UserInformationRequest {}

/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
export interface UserInformationResponse {
  access_token: string
  refresh_token: string
}

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
  username: string
  /**
   * 用户昵称
   */
  nickname: string
  /**
   * 头像url
   */
  avatar: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 是不是业务员 0:不是 1:是
   */
  salesman_flag: string
  /**
   * 业务员手机号
   */
  mobile: string
  /**
   * 业务员姓名
   */
  real_name: string
  /**
   * 数据隔离
   */
  data_filter: string
  id: string
}

/**
 * 接口 [修改用户信息↗](https://doc.jsxygkj.com/project/259/interface/api/7404) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `PUT /sysUser/{id}`
 * @更新时间 `2021-11-24 10:40:41`
 */
export interface SysUserIdResponse {}

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
  username: string
  /**
   * 昵称
   */
  nickname: string
  /**
   * 邮箱
   */
  email: string
  /**
   * 数据权限
   */
  data_filter: string
}

/**
 * 接口 [新增用户↗](https://doc.jsxygkj.com/project/259/interface/api/7754) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /sysUser`
 * @更新时间 `2021-12-21 18:05:36`
 */
export interface SysUserResponse {}

/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
export interface SysUserPageRequest {
  count?: string
  page?: string
  /**
   * 是不是业务员
   */
  salesman_flag?: string
  /**
   * 用户名
   */
  username?: string
  /**
   * 业务员手机号
   */
  mobile?: string
}

/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
export interface SysUserPageResponse {
  total?: number
  count?: number
  page?: number
  total_page?: number
  items?: {
    id: number
    /**
     * 用户名
     */
    username: string
    /**
     * 昵称
     */
    nickname: null
    /**
     * 头像url
     */
    avatar: null
    /**
     * 邮箱
     */
    email: null
    /**
     * 小程序openid
     */
    openid: string
    /**
     * 是不是业务员 0:不是 1:是
     */
    salesman_flag: number
    /**
     * 业务员手机号
     */
    mobile: string
    /**
     * 业务员姓名
     */
    real_name: string
    /**
     * 数据权限
     */
    data_filter: null
  }[]
}

/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
export interface SysUserIdRequest {
  id: string
}

/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
export interface SysUserIdResponse {
  id?: number
  /**
   * 用户名
   */
  username?: string
  /**
   * 昵称
   */
  nickname?: string
  /**
   * 头像url
   */
  avatar?: null
  /**
   * 邮箱
   */
  email?: null
  /**
   * 微信小程序openid
   */
  openid?: null
  /**
   * 是不是业务员
   */
  salesman_flag?: number
  /**
   * 业务员手机号
   */
  mobile?: string
  /**
   * 业务员姓名
   */
  real_name?: string
  /**
   * 数据权限
   */
  data_filter?: string
}

/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **请求类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
export interface UserLoginRequest {
  username: string
  password: string
}

/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **返回类型**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
export interface UserLoginResponse {
  access_token: string
  refresh_token: string
}

/* prettier-ignore-end */
