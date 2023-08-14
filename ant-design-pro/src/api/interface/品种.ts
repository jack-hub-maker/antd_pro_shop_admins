/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore

/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
export interface SkuPageRequest {
  count: string
  page: string
  /**
   * 品种名称
   */
  sku_name: string
}

/**
 * 接口 [品种列表↗](https://doc.jsxygkj.com/project/259/interface/api/5192) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/page`
 * @更新时间 `2021-09-17 11:43:04`
 */
export interface SkuPageResponse {}

/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
export interface SkuIdRequest {
  id: string
}

/**
 * 接口 [品种删除↗](https://doc.jsxygkj.com/project/259/interface/api/5213) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `DELETE /sku/{id}`
 * @更新时间 `2021-09-16 17:42:27`
 */
export interface SkuIdResponse {}

/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **请求类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
export interface SkuIdRequest {
  id: string
}

/**
 * 接口 [品种详情↗](https://doc.jsxygkj.com/project/259/interface/api/5206) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `GET /sku/{id}`
 * @更新时间 `2021-09-16 17:41:57`
 */
export interface SkuIdResponse {
  id?: number
  /**
   * 品种编码
   */
  code?: string
  /**
   * 品种名称
   */
  name?: string
  /**
   * 备注
   */
  remarks?: string
}

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
  code: string
  /**
   * 品种名称
   */
  name: string
  /**
   * 备注
   */
  remarks: string
}

/**
 * 接口 [添加品种↗](https://doc.jsxygkj.com/project/259/interface/api/5199) 的 **返回类型**
 *
 * @分类 [品种↗](https://doc.jsxygkj.com/project/259/interface/api/cat_610)
 * @请求头 `POST /sku`
 * @更新时间 `2021-09-16 17:40:36`
 */
export interface SkuResponse {}

/* prettier-ignore-end */
