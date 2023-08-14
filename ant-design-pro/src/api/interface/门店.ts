/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore

/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **请求类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
export interface StorePageRequest {
  count?: string
  page?: string
  /**
   * 地址
   */
  location?: string
  /**
   * 店名
   */
  bs_name?: string
  /**
   * 务员姓名
   */
  people_name?: string
  /**
   * 业务员电话
   */
  people_phone?: string
  /**
   * 省行政编码
   */
  province_code?: string
  /**
   * 市行政编码
   */
  city_code?: string
  /**
   * 区县行政编码
   */
  county_code?: string
}

/**
 * 接口 [门店列表↗](https://doc.jsxygkj.com/project/259/interface/api/4758) 的 **返回类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/page`
 * @更新时间 `2021-11-25 13:48:20`
 */
export interface StorePageResponse {}

/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **请求类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
export interface StoreIdRequest {
  id: string
}

/**
 * 接口 [门店删除↗](https://doc.jsxygkj.com/project/259/interface/api/5129) 的 **返回类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `DELETE /store/{id}`
 * @更新时间 `2021-09-15 11:47:16`
 */
export interface StoreIdResponse {}

/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **请求类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
export interface StoreIdRequest {
  id: string
}

/**
 * 接口 [门店详情↗](https://doc.jsxygkj.com/project/259/interface/api/5115) 的 **返回类型**
 *
 * @分类 [门店↗](https://doc.jsxygkj.com/project/259/interface/api/cat_598)
 * @请求头 `GET /store/{id}`
 * @更新时间 `2021-10-13 16:06:08`
 */
export interface StoreIdResponse {
  id?: number
  /**
   * 门店名称
   */
  bs_name?: string
  /**
   * 区县
   */
  county?: null
  /**
   * 区县编码
   */
  county_code?: null
  /**
   * 市
   */
  city?: null
  /**
   * 市编码
   */
  city_code?: null
  /**
   * 省
   */
  province?: null
  /**
   * 省编码
   */
  province_code?: null
  /**
   * 备注
   */
  remarks?: null
  /**
   * 详细地址
   */
  location?: string
  /**
   * 店主电话
   */
  phone?: string
  /**
   * 业务员姓名
   */
  people_name?: null
  /**
   * 业务员电话
   */
  people_phone?: null
  /**
   * NFC标号
   */
  nfc_uid: string
  /**
   * 在售商品列表
   */
  sku_list: {
    /**
     * 商品id
     */
    id: string
    /**
     * 商品名称
     */
    name: string
  }[]
}

/* prettier-ignore-end */
