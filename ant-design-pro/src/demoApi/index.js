/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */
/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */
// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, prepare } from 'yapi-to-typescript';
// @ts-ignore
import request from './request';
const mockUrl_0_0_0_0 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_0 = '';
const prodUrl_0_0_0_0 = '';
const dataKey_0_0_0_0 = 'data';
/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **请求配置**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
const storePageRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/store/page',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM5ODk3NzEzfQ.nljHgzPytaHGkchtx1pXq82JlLktU0i_vDfyCVuagzA',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
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
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/store/{id}',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM2Njk5NTQ0fQ.y8jQbIxOuYT25QMstQH19UvSt991vKSBEQXOsTu5jhg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
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
    mockUrl: mockUrl_0_0_0_0,
    devUrl: devUrl_0_0_0_0,
    prodUrl: prodUrl_0_0_0_0,
    path: '/store/{id}',
    method: Method.DELETE,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.json,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_0,
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
const mockUrl_0_0_0_1 = 'https://doc.jsxygkj.com/mock/259';
const devUrl_0_0_0_1 = '';
const prodUrl_0_0_0_1 = '';
const dataKey_0_0_0_1 = 'data';
/**
 * 接口 [生成随机店铺↗](https://doc.jsxygkj.com/project/259/interface/api/5241) 的 **请求配置**
 *
 * @分类 [生成测试数据↗](https://doc.jsxygkj.com/project/259/interface/api/cat_613)
 * @请求头 `GET /test/init/store`
 * @更新时间 `2021-09-24 17:00:05`
 */
const testInitStoreRequestConfig = /*#__PURE__*/ {
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/test/init/store',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
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
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/test/init/user',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
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
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/test/init/clock',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
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
    mockUrl: mockUrl_0_0_0_1,
    devUrl: devUrl_0_0_0_1,
    prodUrl: prodUrl_0_0_0_1,
    path: '/test/init/order',
    method: Method.GET,
    requestHeaders: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6Nywic2NvcGUiOiJsaW4iLCJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMzODU3Njg3fQ.z1bSRQ2XGh6PMcFdVisVLL7-STLLG5Z0fA15xVtgKbg',
    },
    requestBodyType: RequestBodyType.query,
    responseBodyType: ResponseBodyType.json,
    dataKey: dataKey_0_0_0_1,
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
/* prettier-ignore-end */
