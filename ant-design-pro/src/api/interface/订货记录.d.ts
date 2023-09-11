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
