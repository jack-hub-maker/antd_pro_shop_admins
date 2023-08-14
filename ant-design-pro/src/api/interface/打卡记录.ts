/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore

/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **请求类型**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
export interface ClockInPageRequest {
  count?: string
  page?: string
  /**
   * 店名
   */
  bs_name?: string
  /**
   * NFC编号
   */
  nfc_uid?: string
  /**
   * 开始时间
   */
  start?: string
  /**
   * 结束时间
   */
  end?: string
}

/**
 * 接口 [打卡记录列表↗](https://doc.jsxygkj.com/project/259/interface/api/5234) 的 **返回类型**
 *
 * @分类 [打卡记录↗](https://doc.jsxygkj.com/project/259/interface/api/cat_612)
 * @请求头 `GET /clockIn/page`
 * @更新时间 `2021-11-25 13:53:50`
 */
export interface ClockInPageResponse {
  total?: number
  count?: number
  page?: number
  total_page?: number
  items?: {
    /**
     * 序号
     */
    id?: number
    /**
     * 门店名称
     */
    store_name?: string
    /**
     * NFC标号
     */
    nfc_uid?: string
    /**
     * 备注
     */
    remarks?: string
    /**
     * 省
     */
    province?: string
    /**
     * 市
     */
    city?: string
    /**
     * 区
     */
    county?: null
    /**
     * 地址
     */
    location?: string
    /**
     * 业务员姓名
     */
    people_name?: string
    /**
     * 业务员手机号
     */
    people_phone?: string
    /**
     * 记录产品数量
     */
    sku_num?: number
    /**
     * 打卡时间
     */
    create_time?: string
    /**
     * 格式化好的打卡时间
     */
    create_time_str: string
    /**
     * 记录产品名称
     */
    sku_list?: {
      /**
       * 商品名称
       */
      sku_name: string
      /**
       * 记录数量
       */
      num: string
    }[]
  }[]
}

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
  year: string
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
  id: number
  /**
   * 品名
   */
  sku_name: string
  /**
   * 1月
   */
  m1: number
  /**
   * 2月
   */
  m2: number
  /**
   * 3月
   */
  m3: number
  /**
   * 4月
   */
  m4: number
  /**
   * 5月
   */
  m5: number
  /**
   * 6月
   */
  m6: number
  /**
   * 7月
   */
  m7: number
  /**
   * 8月
   */
  m8: number
  /**
   * 9月
   */
  m9: number
  /**
   * 10月
   */
  m10: number
  /**
   * 11月
   */
  m11: number
  /**
   * 12月
   */
  m12: number
  /**
   * 合计
   */
  all: number
}[]

/* prettier-ignore-end */
