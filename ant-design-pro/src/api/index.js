/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_1 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_1 = '';
const prodUrl_0_0_0_1 = '';
const dataKey_0_0_0_1 = 'data';
/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
const cmsUserLoginRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/cms/user/login',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'cmsUserLogin',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [登陆↗](https://doc.jsxygkj.com/project/259/interface/api/4751) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /cms/user/login`
 * @更新时间 `2021-09-15 11:54:01`
 */
export const cmsUserLogin = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(cmsUserLoginRequestConfig, requestData), ...args);
};
cmsUserLogin.requestConfig = cmsUserLoginRequestConfig;
/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
const cmsUserInformationRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/cms/user/information',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'cmsUserInformation',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [查询自己信息↗](https://doc.jsxygkj.com/project/259/interface/api/7369) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/information`
 * @更新时间 `2021-11-19 15:15:03`
 */
export const cmsUserInformation = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(cmsUserInformationRequestConfig, requestData), ...args);
};
cmsUserInformation.requestConfig = cmsUserInformationRequestConfig;
/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
const sysUserPageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/sysUser/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: ['count', 'page', 'salesman_flag', 'username', 'mobile'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysUserPage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [用户列表↗](https://doc.jsxygkj.com/project/259/interface/api/7376) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/page`
 * @更新时间 `2021-11-24 10:43:08`
 */
export const sysUserPage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysUserPageRequestConfig, requestData), ...args);
};
sysUserPage.requestConfig = sysUserPageRequestConfig;
/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
const sysUserIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/sysUser/{id}',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysUserId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [用户详情↗](https://doc.jsxygkj.com/project/259/interface/api/7397) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /sysUser/{id}`
 * @更新时间 `2021-11-23 17:05:36`
 */
export const sysUserId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysUserIdRequestConfig, requestData), ...args);
};
sysUserId.requestConfig = sysUserIdRequestConfig;
/**
 * 接口 [修改用户信息↗](https://doc.jsxygkj.com/project/259/interface/api/7404) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `PUT /sysUser/{id}`
 * @更新时间 `2021-11-24 10:40:41`
 */
const sysUserIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/sysUser/{id}',
    method: Method.PUT,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysUserId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [修改用户信息↗](https://doc.jsxygkj.com/project/259/interface/api/7404) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `PUT /sysUser/{id}`
 * @更新时间 `2021-11-24 10:40:41`
 */
export const sysUserId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysUserIdRequestConfig, requestData), ...args);
};
sysUserId.requestConfig = sysUserIdRequestConfig;
/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
const cmsUserPermissionsRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/cms/user/permissions',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'cmsUserPermissions',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [查询权限↗](https://doc.jsxygkj.com/project/259/interface/api/7411) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `GET /cms/user/permissions`
 * @更新时间 `2021-11-24 17:41:52`
 */
export const cmsUserPermissions = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(cmsUserPermissionsRequestConfig, requestData), ...args);
};
cmsUserPermissions.requestConfig = cmsUserPermissionsRequestConfig;
/**
 * 接口 [新增用户↗](https://doc.jsxygkj.com/project/259/interface/api/7754) 的 **请求配置**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /sysUser`
 * @更新时间 `2021-12-21 18:05:36`
 */
const sysUserRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/sysUser',
    method: Method.POST,
    requestHeaders: {},
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysUser',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [新增用户↗](https://doc.jsxygkj.com/project/259/interface/api/7754) 的 **请求函数**
 *
 * @分类 [用户相关↗](https://doc.jsxygkj.com/project/259/interface/api/cat_597)
 * @请求头 `POST /sysUser`
 * @更新时间 `2021-12-21 18:05:36`
 */
export const sysUser = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysUserRequestConfig, requestData), ...args);
};
sysUser.requestConfig = sysUserRequestConfig;
const mockUrl_0_0_0_2 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_2 = '';
const prodUrl_0_0_0_2 = '';
const dataKey_0_0_0_2 = 'data';
/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **请求配置**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
const storePageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/store/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: [],
    queryNames: [
        'count',
        'page',
        'location',
        'bs_name',
        'people_name',
        'people_phone',
        'province_code',
        'city_code',
        'county_code',
    ],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'storePage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **请求函数**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
export const storePage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(storePageRequestConfig, requestData), ...args);
};
storePage.requestConfig = storePageRequestConfig;
/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **请求配置**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
const storeIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/store/{id}',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2Njk5NTQ0fQ.y8jQbIxOuYT25QMstQH19UvSt991vKSBEQXOsTu5jhg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'storeId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **请求函数**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
export const storeId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(storeIdRequestConfig, requestData), ...args);
};
storeId.requestConfig = storeIdRequestConfig;
/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **请求配置**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
const storeIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_2,
    devUrl: devUrl_0_0_0_2,
    prodUrl: prodUrl_0_0_0_2,
    path: '/store/{id}',
    method: Method.DELETE,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_2,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'storeId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **请求函数**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
export const storeId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(storeIdRequestConfig, requestData), ...args);
};
storeId.requestConfig = storeIdRequestConfig;
const mockUrl_0_0_0_3 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_3 = '';
const prodUrl_0_0_0_3 = '';
const dataKey_0_0_0_3 = 'data';
/**
 * 接口 [行政区划↗](https://doc.jsxygkj.com/project/259/interface/api/5087) 的 **请求配置**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/linkage`
 * @更新时间 `2021-09-15 10:30:47`
 */
const sysAreaLinkageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/sysArea/linkage',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysAreaLinkage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [行政区划↗](https://doc.jsxygkj.com/project/259/interface/api/5087) 的 **请求函数**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/linkage`
 * @更新时间 `2021-09-15 10:30:47`
 */
export const sysAreaLinkage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysAreaLinkageRequestConfig, requestData), ...args);
};
sysAreaLinkage.requestConfig = sysAreaLinkageRequestConfig;
/**
 * 接口 [区域列表↗](https://doc.jsxygkj.com/project/259/interface/api/5094) 的 **请求配置**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/page`
 * @更新时间 `2021-09-15 11:34:56`
 */
const sysAreaPageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/sysArea/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: [],
    queryNames: ['count', 'page'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysAreaPage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [区域列表↗](https://doc.jsxygkj.com/project/259/interface/api/5094) 的 **请求函数**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/page`
 * @更新时间 `2021-09-15 11:34:56`
 */
export const sysAreaPage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysAreaPageRequestConfig, requestData), ...args);
};
sysAreaPage.requestConfig = sysAreaPageRequestConfig;
/**
 * 接口 [区域详情↗](https://doc.jsxygkj.com/project/259/interface/api/5101) 的 **请求配置**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/{id}`
 * @更新时间 `2021-09-15 11:35:02`
 */
const sysAreaIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_3,
    devUrl: devUrl_0_0_0_3,
    prodUrl: prodUrl_0_0_0_3,
    path: '/sysArea/{id}',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_3,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sysAreaId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [区域详情↗](https://doc.jsxygkj.com/project/259/interface/api/5101) 的 **请求函数**
 *
 * @分类 [区域↗](https://doc.jsxygkj.com/project/259/interface/api/cat_606)
 * @请求头 `GET /sysArea/{id}`
 * @更新时间 `2021-09-15 11:35:02`
 */
export const sysAreaId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(sysAreaIdRequestConfig, requestData), ...args);
};
sysAreaId.requestConfig = sysAreaIdRequestConfig;
const mockUrl_0_0_0_4 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_4 = '';
const prodUrl_0_0_0_4 = '';
const dataKey_0_0_0_4 = 'data';
/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **请求配置**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
const skuPageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/sku/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: ['count', 'page', 'sku_name'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'skuPage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
export const skuPage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(skuPageRequestConfig, requestData), ...args);
};
skuPage.requestConfig = skuPageRequestConfig;
/**
 * 接口 [添加品种↗](https://doc.jsxygkj.com/project/259/interface/api/5199) 的 **请求配置**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `POST /sku`
 * @更新时间 `2021-09-16 17:40:36`
 */
const skuRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/sku',
    method: Method.POST,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: [],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'sku',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [添加品种↗](https://doc.jsxygkj.com/project/259/interface/api/5199) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `POST /sku`
 * @更新时间 `2021-09-16 17:40:36`
 */
export const sku = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(skuRequestConfig, requestData), ...args);
};
sku.requestConfig = skuRequestConfig;
/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **请求配置**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
const skuIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/sku/{id}',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'skuId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
export const skuId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(skuIdRequestConfig, requestData), ...args);
};
skuId.requestConfig = skuIdRequestConfig;
/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **请求配置**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
const skuIdRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_4,
    devUrl: devUrl_0_0_0_4,
    prodUrl: prodUrl_0_0_0_4,
    path: '/sku/{id}',
    method: Method.DELETE,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_4,
    paramNames: ['id'],
    queryNames: [],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'skuId',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **请求函数**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
export const skuId = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(skuIdRequestConfig, requestData), ...args);
};
skuId.requestConfig = skuIdRequestConfig;
const mockUrl_0_0_0_5 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_5 = '';
const prodUrl_0_0_0_5 = '';
const dataKey_0_0_0_5 = 'data';
/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **请求配置**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
const clockInPageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/clockIn/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: ['count', 'page', 'bs_name', 'nfc_uid', 'start', 'end'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'clockInPage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **请求函数**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
export const clockInPage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(clockInPageRequestConfig, requestData), ...args);
};
clockInPage.requestConfig = clockInPageRequestConfig;
/**
 * 接口 [销售分析↗](https://doc.jsxygkj.com/project/259/interface/api/5262) 的 **请求配置**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockinDetail/statistics`
 * @更新时间 `2021-10-13 15:01:49`
 */
const clockinDetailStatisticsRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_5,
    devUrl: devUrl_0_0_0_5,
    prodUrl: prodUrl_0_0_0_5,
    path: '/clockinDetail/statistics',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2Njk5NTQ0fQ.y8jQbIxOuYT25QMstQH19UvSt991vKSBEQXOsTu5jhg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_5,
    paramNames: [],
    queryNames: ['year'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'clockinDetailStatistics',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [销售分析↗](https://doc.jsxygkj.com/project/259/interface/api/5262) 的 **请求函数**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockinDetail/statistics`
 * @更新时间 `2021-10-13 15:01:49`
 */
export const clockinDetailStatistics = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(clockinDetailStatisticsRequestConfig, requestData), ...args);
};
clockinDetailStatistics.requestConfig = clockinDetailStatisticsRequestConfig;
const mockUrl_0_0_0_6 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_6 = '';
const prodUrl_0_0_0_6 = '';
const dataKey_0_0_0_6 = 'data';
/**
 * 接口 [生成随机店铺↗](https://doc.jsxygkj.com/project/259/interface/api/5241) 的 **请求配置**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/store`
 * @更新时间 `2021-09-24 17:00:05`
 */
const testInitStoreRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/test/init/store',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['num'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'testInitStore',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [生成随机店铺↗](https://doc.jsxygkj.com/project/259/interface/api/5241) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/store`
 * @更新时间 `2021-09-24 17:00:05`
 */
export const testInitStore = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(testInitStoreRequestConfig, requestData), ...args);
};
testInitStore.requestConfig = testInitStoreRequestConfig;
/**
 * 接口 [生成随机业务员↗](https://doc.jsxygkj.com/project/259/interface/api/5248) 的 **请求配置**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/user`
 * @更新时间 `2021-09-24 17:00:33`
 */
const testInitUserRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/test/init/user',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['num'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'testInitUser',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [生成随机业务员↗](https://doc.jsxygkj.com/project/259/interface/api/5248) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/user`
 * @更新时间 `2021-09-24 17:00:33`
 */
export const testInitUser = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(testInitUserRequestConfig, requestData), ...args);
};
testInitUser.requestConfig = testInitUserRequestConfig;
/**
 * 接口 [生成随机打卡↗](https://doc.jsxygkj.com/project/259/interface/api/5255) 的 **请求配置**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/clock`
 * @更新时间 `2021-09-24 17:00:28`
 */
const testInitClockRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/test/init/clock',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['year', 'num'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'testInitClock',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [生成随机打卡↗](https://doc.jsxygkj.com/project/259/interface/api/5255) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/clock`
 * @更新时间 `2021-09-24 17:00:28`
 */
export const testInitClock = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(testInitClockRequestConfig, requestData), ...args);
};
testInitClock.requestConfig = testInitClockRequestConfig;
/**
 * 接口 [生成随机订货↗](https://doc.jsxygkj.com/project/259/interface/api/10862) 的 **请求配置**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/order`
 * @更新时间 `2022-02-16 12:17:13`
 */
const testInitOrderRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_6,
    devUrl: devUrl_0_0_0_6,
    prodUrl: prodUrl_0_0_0_6,
    path: '/test/init/order',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_6,
    paramNames: [],
    queryNames: ['year', 'num'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'testInitOrder',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [生成随机订货↗](https://doc.jsxygkj.com/project/259/interface/api/10862) 的 **请求函数**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/order`
 * @更新时间 `2022-02-16 12:17:13`
 */
export const testInitOrder = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(testInitOrderRequestConfig, requestData), ...args);
};
testInitOrder.requestConfig = testInitOrderRequestConfig;
const mockUrl_0_0_0_7 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_7 = '';
const prodUrl_0_0_0_7 = '';
const dataKey_0_0_0_7 = 'data';
/**
 * 接口 [大屏接口↗](https://doc.jsxygkj.com/project/259/interface/api/5619) 的 **请求配置**
 *
 * @分类 [数据统计↗](https://doc.jsxygkj.com/project/259/interface/api/cat_623)
 * @请求头 `GET /statistic`
 * @更新时间 `2021-09-24 15:44:09`
 */
const statisticRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_7,
    devUrl: devUrl_0_0_0_7,
    prodUrl: prodUrl_0_0_0_7,
    path: '/statistic',
    method: Method.GET,
    requestHeaders: {},
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_7,
    paramNames: [],
    queryNames: [],
    requestDataOptional: true,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'statistic',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [大屏接口↗](https://doc.jsxygkj.com/project/259/interface/api/5619) 的 **请求函数**
 *
 * @分类 [数据统计↗](https://doc.jsxygkj.com/project/259/interface/api/cat_623)
 * @请求头 `GET /statistic`
 * @更新时间 `2021-09-24 15:44:09`
 */
export const statistic = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(statisticRequestConfig, requestData), ...args);
};
statistic.requestConfig = statisticRequestConfig;
const mockUrl_0_0_0_8 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_8 = '';
const prodUrl_0_0_0_8 = '';
const dataKey_0_0_0_8 = 'data';
/**
 * 接口 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/10239) 的 **请求配置**
 *
 * @分类 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_732)
 * @请求头 `GET /order/page`
 * @更新时间 `2022-02-10 11:30:48`
 */
const orderPageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_8,
    devUrl: devUrl_0_0_0_8,
    prodUrl: prodUrl_0_0_0_8,
    path: '/order/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_8,
    paramNames: [],
    queryNames: ['count', 'page', 'bs_name', 'nfc_uid', 'start', 'end'],
    requestDataOptional: false,
    requestDataJsonSchema: {},
    responseDataJsonSchema: {},
    requestFunctionName: 'orderPage',
    queryStringArrayFormat: QueryStringArrayFormat.brackets,
    extraInfo: {},
};
/**
 * 接口 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/10239) 的 **请求函数**
 *
 * @分类 [订货记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_732)
 * @请求头 `GET /order/page`
 * @更新时间 `2022-02-10 11:30:48`
 */
export const orderPage = /*#__PURE__*/ (requestData, ...args) => {
    return request(prepare(orderPageRequestConfig, requestData), ...args);
};
orderPage.requestConfig = orderPageRequestConfig;
/* prettier-ignore-end */
