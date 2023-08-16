import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript';
import request from './request';
export type Request<TRequestData, TRequestConfig extends RequestConfig, TRequestResult> = (TRequestConfig['requestDataOptional'] extends true ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
    requestConfig: TRequestConfig;
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
