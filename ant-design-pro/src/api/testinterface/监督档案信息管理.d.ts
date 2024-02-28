/**
 * 接口 [批量导出↗](http://yapi.zswltec.com:3000/project/57/interface/api/16363) 的 **请求类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `GET /fileReport/manage/export`
 * @更新时间 `2023-11-22 18:48:41`
 */
export interface ManageExportRequest {
    /**
     * 档案名称
     */
    fileName?: string;
    /**
     * 档案报告类型：人员档案:PERSONAL_FILE/事项档案:EVENT_FILE
     */
    reportType?: string;
    /**
     * 档案创建区间开始时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtCreateFrom?: string;
    /**
     * 档案创建区间截止时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtCreateTo?: string;
    /**
     * 最近下发时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtProcessFrom?: string;
    /**
     * 最近下发区间截止时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtProcessTo?: string;
    /**
     * 导出模版id
     */
    ids?: string;
    /**
     * 页码
     */
    page: string;
    /**
     * 页面记录条数
     */
    pageSize: string;
}
/**
 * 接口 [批量导出↗](http://yapi.zswltec.com:3000/project/57/interface/api/16363) 的 **返回类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `GET /fileReport/manage/export`
 * @更新时间 `2023-11-22 18:48:41`
 */
export interface ManageExportResponse {
}
/**
 * 接口 [报送列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/15541) 的 **请求类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `GET /fileReport/manage/list`
 * @更新时间 `2023-11-23 14:15:38`
 */
export interface ManageListRequest {
    /**
     * 档案名称
     */
    fileName?: string;
    /**
     * 档案报告类型：人员档案:PERSONAL_FILE/事项档案:EVENT_FILE
     */
    reportType?: string;
    /**
     * 档案创建区间开始时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtCreateFrom?: string;
    /**
     * 档案创建区间截止时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtCreateTo?: string;
    /**
     * 最近下发时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtProcessFrom?: string;
    /**
     * 最近下发区间截止时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtProcessTo?: string;
    /**
     * 导出模版id
     */
    ids?: string;
    /**
     * 页码
     */
    page: string;
    /**
     * 页面记录条数
     */
    pageSize: string;
}
/**
 * 接口 [报送列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/15541) 的 **返回类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `GET /fileReport/manage/list`
 * @更新时间 `2023-11-23 14:15:38`
 */
export interface ManageListResponse {
    /**
     * 成功标记
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 状态信息
     */
    message?: string;
    /**
     * 结果数据
     */
    data?: {
        total?: number;
        page?: number;
        pageSize?: number;
        pages?: number;
        size?: number;
        list?: {
            id?: number;
            /**
             * 唯一标识
             */
            uuid?: string;
            /**
             * 关联的报送任务标识
             */
            taskUuid?: string;
            /**
             * 档案模版名称
             */
            fileName?: string;
            /**
             * 模版状态：启用、禁用、保存-草稿中 (DRAFT: 草稿, ENABLE: 启用, DISABLE: 禁用)
             */
            templateStatus?: string;
            /**
             * 上传附件标识数组
             */
            attachment?: string;
            /**
             * 下发任务次数
             */
            processCount?: number;
            /**
             * 最近下发时间
             */
            gmtProcess?: string;
            /**
             * 创建时间
             */
            gmtCreate?: string;
            /**
             * 页码
             */
            page: number;
            /**
             * 页面记录条数
             */
            pageSize: number;
        }[];
        map?: {
            KEY?: {};
        };
    };
}
/**
 * 接口 [更改状态↗](http://yapi.zswltec.com:3000/project/57/interface/api/16381) 的 **请求类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `POST /fileReport/manage/changeStatus`
 * @更新时间 `2023-11-23 14:15:30`
 */
export interface ManageChangeStatusRequest {
    /**
     * 模版ID
     */
    id: number;
    /**
     * 模版状态：启用、禁用 (DRAFT: 草稿, ENABLE: 启用, DISABLE: 禁用)
     */
    templateStatus: string;
}
/**
 * 接口 [更改状态↗](http://yapi.zswltec.com:3000/project/57/interface/api/16381) 的 **返回类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `POST /fileReport/manage/changeStatus`
 * @更新时间 `2023-11-23 14:15:30`
 */
export interface ManageChangeStatusResponse {
    /**
     * 成功标记
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 状态信息
     */
    message?: string;
}
/**
 * 接口 [模板任务详情↗](http://yapi.zswltec.com:3000/project/57/interface/api/15547) 的 **请求类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `GET /fileReport/manage/detail`
 * @更新时间 `2023-11-22 18:45:56`
 */
export interface ManageDetailRequest {
    /**
     * 唯一标识
     */
    uuid?: string;
    /**
     * 档案报告类型：人员档案:PERSONAL_FILE/事项档案:EVENT_FILE
     */
    reportType?: string;
    /**
     * 档案名称
     */
    fileName?: string;
    /**
     * 任务名称
     */
    taskName?: string;
    /**
     * 档案创建区间开始时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtCreateFrom?: string;
    /**
     * 档案创建区间截止时间 : yyyy-MM-dd HH:mm:ss
     */
    gmtCreateTo?: string;
    /**
     * 任务结束区间开始时间 : yyyy-MM-dd HH:mm:ss
     */
    endTimeFrom?: string;
    /**
     * 任务结束区间截止时间 : yyyy-MM-dd HH:mm:ss
     */
    endTimeTo?: string;
    /**
     * 页码
     */
    page: string;
    /**
     * 页面记录条数
     */
    pageSize: string;
}
/**
 * 接口 [模板任务详情↗](http://yapi.zswltec.com:3000/project/57/interface/api/15547) 的 **返回类型**
 *
 * @分类 [监督档案信息管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3300)
 * @请求头 `GET /fileReport/manage/detail`
 * @更新时间 `2023-11-22 18:45:56`
 */
export interface ManageDetailResponse {
    /**
     * 成功标记
     */
    success?: boolean;
    /**
     * 状态码
     */
    code?: number;
    /**
     * 状态信息
     */
    message?: string;
    /**
     * 结果数据
     */
    data?: {
        total?: number;
        page?: number;
        pageSize?: number;
        pages?: number;
        size?: number;
        list?: {
            id?: number;
            /**
             * 唯一标识
             */
            uuid?: string;
            /**
             * 关联的报送任务标识
             */
            taskUuid?: string;
            /**
             * 档案模版名称
             */
            fileName?: string;
            /**
             * 任务名称
             */
            taskName?: string;
            /**
             * 创建时间
             */
            gmtCreate?: string;
            /**
             * 创建人
             */
            createdBy?: string;
            /**
             * 任务结束时间
             */
            endTime?: string;
            /**
             * 下发人数
             */
            receiverCount?: number;
            /**
             * 页码
             */
            page: number;
            /**
             * 页面记录条数
             */
            pageSize: number;
        }[];
        map?: {
            KEY?: {};
        };
    };
}
