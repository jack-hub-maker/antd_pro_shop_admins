/**
 * 接口 [上传报告（审批时）↗](http://yapi.zswltec.com:3000/project/11/interface/api/6324) 的 **请求类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/uploadApproval`
 * @更新时间 `2022-08-24 10:20:47`
 */
export interface PaymentUploadApprovalRequest {
    file: File;
    paymentId: string;
    materialsType: string;
}
/**
 * 接口 [上传报告（审批时）↗](http://yapi.zswltec.com:3000/project/11/interface/api/6324) 的 **返回类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/uploadApproval`
 * @更新时间 `2022-08-24 10:20:47`
 */
export interface PaymentUploadApprovalResponse {
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 提示信息
     */
    msg?: string;
    /**
     * 异常时返回的异常信息
     */
    description?: string;
}
/**
 * 接口 [材料上传↗](http://yapi.zswltec.com:3000/project/11/interface/api/4452) 的 **请求类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/upload`
 * @更新时间 `2022-08-17 16:45:00`
 */
export interface PaymentUploadRequest {
    file: File;
    paymentId: string;
    materialsType: string;
}
/**
 * 接口 [材料上传↗](http://yapi.zswltec.com:3000/project/11/interface/api/4452) 的 **返回类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/upload`
 * @更新时间 `2022-08-17 16:45:00`
 */
export interface PaymentUploadResponse {
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 提示信息
     */
    msg?: string;
    /**
     * 异常时返回的异常信息
     */
    description?: string;
}
/**
 * 接口 [材料删除↗](http://yapi.zswltec.com:3000/project/11/interface/api/4448) 的 **请求类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/remove`
 * @更新时间 `2022-08-17 16:45:00`
 */
export interface PaymentRemoveRequest {
    /**
     * 材料记录id
     */
    id: number;
}
/**
 * 接口 [材料删除↗](http://yapi.zswltec.com:3000/project/11/interface/api/4448) 的 **返回类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/remove`
 * @更新时间 `2022-08-17 16:45:00`
 */
export interface PaymentRemoveResponse {
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 提示信息
     */
    msg?: string;
    /**
     * 异常时返回的异常信息
     */
    description?: string;
}
/**
 * 接口 [获取报告清单列表（审批时）↗](http://yapi.zswltec.com:3000/project/11/interface/api/6328) 的 **请求类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/listApproval`
 * @更新时间 `2022-08-24 10:20:47`
 */
export interface PaymentListApprovalRequest {
    /**
     * 付款申请id
     */
    paymentId: number;
    /**
     * 资料类型
     */
    materialsType?: string;
}
/**
 * 接口 [获取报告清单列表（审批时）↗](http://yapi.zswltec.com:3000/project/11/interface/api/6328) 的 **返回类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/listApproval`
 * @更新时间 `2022-08-24 10:20:47`
 */
export interface PaymentListApprovalResponse {
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 提示信息
     */
    msg?: string;
    /**
     * 数据封装
     */
    data?: {
        /**
         * 材料文件id
         */
        id?: number;
        /**
         * 材料类型
         */
        materialsType?: string;
        /**
         * 材料名称
         */
        filename?: string;
        /**
         * 上传人id
         */
        createBy?: number;
        /**
         * 上传人
         */
        creator?: string;
        /**
         * 上传时间
         */
        createTime?: string;
    }[];
    /**
     * 异常时返回的异常信息
     */
    description?: string;
}
/**
 * 接口 [资料清单↗](http://yapi.zswltec.com:3000/project/11/interface/api/4432) 的 **请求类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/list`
 * @更新时间 `2022-08-24 10:20:47`
 */
export interface PaymentListRequest {
    /**
     * 付款申请id
     */
    paymentId: number;
    /**
     * 资料类型
     */
    materialsType?: string;
}
/**
 * 接口 [资料清单↗](http://yapi.zswltec.com:3000/project/11/interface/api/4432) 的 **返回类型**
 *
 * @分类 [付款管理-材料接口↗](http://yapi.zswltec.com:3000/project/11/interface/api/cat_830)
 * @请求头 `POST /materials/payment/list`
 * @更新时间 `2022-08-24 10:20:47`
 */
export interface PaymentListResponse {
    /**
     * 是否成功
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 提示信息
     */
    msg?: string;
    /**
     * 数据封装
     */
    data?: {
        KEY?: {
            /**
             * 材料文件id
             */
            id?: number;
            /**
             * 材料类型
             */
            materialsType?: string;
            /**
             * 材料名称
             */
            filename?: string;
            /**
             * 上传人id
             */
            createBy?: number;
            /**
             * 上传人
             */
            creator?: string;
            /**
             * 上传时间
             */
            createTime?: string;
        }[];
    };
    /**
     * 异常时返回的异常信息
     */
    description?: string;
}
