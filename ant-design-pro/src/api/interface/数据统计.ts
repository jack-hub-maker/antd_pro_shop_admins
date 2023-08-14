/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore

/**
 * 接口 [大屏接口↗](https://doc.jsxygkj.com/project/259/interface/api/5619) 的 **请求类型**
 *
 * @分类 [数据统计↗](https://doc.jsxygkj.com/project/259/interface/api/cat_623)
 * @请求头 `GET /statistic`
 * @更新时间 `2021-09-24 15:44:09`
 */
export interface StatisticRequest {}

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
    monthCloclInNum: number
    /**
     * 业务员数量
     */
    peopleNum: number
    /**
     * 区域（省）
     */
    province: string
    /**
     * 销售点数量
     */
    storeNum: number
    /**
     * 经纬度数组
     */
    position: string[]
  }[]
  /**
   * 各区域销售点数量对比统计(前8)
   */
  locationSaleNumList?: {
    /**
     * 销售点数量
     */
    num: string
    /**
     * 区域名称
     */
    province: string
  }[]
  /**
   * 本月登记数量
   */
  monthClockInNum?: number
  /**
   * (当月)每日业务员跑点数量
   */
  peopleClockInNumList?: {
    /**
     * 时间（天）
     */
    cday: string
    /**
     * 跑点数量
     */
    num: number
  }[]
  /**
   * 业务员跑点比例排行(前5)
   */
  peoplePercentList?: {
    /**
     * 业务员名字
     */
    peopleName: string
    /**
     * 跑点占比
     */
    percent: string
  }[]
  /**
   * 热销品种排行(前5)
   */
  skuSaleNumList?: {
    /**
     * 销售数量
     */
    num: number
    /**
     * 品名
     */
    skuName: string
  }[]
  /**
   * 热销品种占比(前5)
   */
  skuSalePerList?: {
    /**
     * 销售比例
     */
    per: number
    /**
     * 品名
     */
    skuName: string
  }[]
  /**
   * 销售点数量
   */
  storeNum?: number
  /**
   * 按月统计品种销量
   */
  yearSkuSale?: {
    /**
     * 品种1名称
     */
    sku1Name?: string
    /**
     * 品种2名称
     */
    sku2Name?: string
    /**
     * 品种3名称
     */
    sku3Name?: string
    /**
     * 销售明细
     */
    skuSaleInfos?: {
      /**
       * 月份
       */
      month: string
      /**
       * 品种1销量
       */
      sku1Num: number
      /**
       * 品种2销量
       */
      sku2Num: number
      /**
       * 品种3销量
       */
      sku3Num: number
    }[]
  }
}

/* prettier-ignore-end */
