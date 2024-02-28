/**
 * 接口 [上传文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16435) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `POST /incorruptible/substratum/add`
 * @更新时间 `2023-11-30 11:26:18`
 */
export interface SubstratumAddRequest {
    /**
     * 标题
     */
    title: string;
    /**
     * 排序（越大越靠前）
     */
    sort: number;
    /**
     * 展示状态:0关闭 , 1打开
     */
    showStatus: number;
    /**
     * 封面图
     */
    surfacePicture: string;
    /**
     * 文章内容
     */
    articleContent: string;
    /**
     * 可见范围:1 仅本公司员工可见, 2 所有用户可见
     */
    radius: string;
}
/**
 * 接口 [上传文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16435) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `POST /incorruptible/substratum/add`
 * @更新时间 `2023-11-30 11:26:18`
 */
export interface SubstratumAddResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [修改展示状态↗](http://yapi.zswltec.com:3000/project/57/interface/api/16447) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/updateStatus`
 * @更新时间 `2023-11-28 13:51:18`
 */
export interface SubstratumUpdateStatusRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [修改展示状态↗](http://yapi.zswltec.com:3000/project/57/interface/api/16447) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/updateStatus`
 * @更新时间 `2023-11-28 13:51:18`
 */
export interface SubstratumUpdateStatusResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [修改文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16453) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `PUT /incorruptible/substratum/update`
 * @更新时间 `2023-11-30 11:26:51`
 */
export interface SubstratumUpdateRequest {
    id?: number;
    /**
     * 唯一标识
     */
    uuid?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 排序（越大越靠前）
     */
    sort?: number;
    /**
     * 展示状态:0关闭 , 1打开
     */
    showStatus?: number;
    /**
     * 封面图
     */
    surfacePicture?: string;
    /**
     * 文章内容
     */
    articleContent?: string;
    /**
     * 可见范围:1 仅本公司员工可见, 2 所有用户可见
     */
    radius: string;
}
/**
 * 接口 [修改文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16453) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `PUT /incorruptible/substratum/update`
 * @更新时间 `2023-11-30 11:26:51`
 */
export interface SubstratumUpdateResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [删除文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16459) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `DELETE /incorruptible/substratum/delete`
 * @更新时间 `2023-11-28 13:51:43`
 */
export interface SubstratumDeleteRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [删除文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16459) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `DELETE /incorruptible/substratum/delete`
 * @更新时间 `2023-11-28 13:51:43`
 */
export interface SubstratumDeleteResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [回显数据↗](http://yapi.zswltec.com:3000/project/57/interface/api/16471) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/findByUuid`
 * @更新时间 `2023-12-27 13:56:25`
 */
export interface SubstratumFindByUuidRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [回显数据↗](http://yapi.zswltec.com:3000/project/57/interface/api/16471) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/findByUuid`
 * @更新时间 `2023-12-27 13:56:25`
 */
export interface SubstratumFindByUuidResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: {
        id?: number;
        /**
         * 唯一标识
         */
        uuid?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 封面图
         */
        surfacePicture?: string;
        /**
         * 排序
         */
        sort?: number;
        /**
         * 展示状态:0关闭 , 1打开
         */
        showStatus?: number;
        /**
         * 文章内容
         */
        articleContent?: string;
        /**
         * 可见范围:1 仅本公司员工可见, 2 所有用户可见
         */
        radius?: string;
        /**
         * 审核记录唯一标识
         */
        auditId?: string;
    };
}
/**
 * 接口 [文章列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/16441) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/list`
 * @更新时间 `2023-12-27 13:55:53`
 */
export interface SubstratumListRequest {
    /**
     * 页码
     */
    page: string;
    /**
     * 页面记录条数
     */
    pageSize: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 审核状态
     */
    approvalStatus?: string;
    /**
     * 创建时间
     */
    gmtCreate?: string;
    /**
     * 请求类型:1 用户端
     */
    requestType: string;
}
/**
 * 接口 [文章列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/16441) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/list`
 * @更新时间 `2023-12-27 13:55:53`
 */
export interface SubstratumListResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: {
        /**
         * 总记录数
         */
        total?: number;
        /**
         * 当前页
         */
        page?: number;
        /**
         * 每页的数量
         */
        pageSize?: number;
        /**
         * 总页数
         */
        pages?: number;
        /**
         * 当前页的数量
         */
        size?: number;
        /**
         * 内容列表
         */
        list?: {
            /**
             * 页码
             */
            page: number;
            /**
             * 页面记录条数
             */
            pageSize: number;
            /**
             * 唯一标识
             */
            uuid: string;
            /**
             * 标题
             */
            title: string;
            /**
             * 封面图
             */
            surfacePicture?: string;
            /**
             * 文章内容
             */
            articleContent?: string;
            /**
             * 排序（越大越靠前）
             */
            sort: number;
            /**
             * 阅读人数
             */
            viewership: number;
            /**
             * 点击量
             */
            watchNumber: number;
            /**
             * 创建时间
             */
            gmtCreate: string;
            /**
             * 展示状态:0关闭 , 1打开
             */
            showStatus: number;
            /**
             * 审核状态
             */
            approvalStatus?: number;
            /**
             * 审核记录唯一标识
             */
            auditId: string;
        }[];
        map?: {
            key?: {};
        };
    };
}
/**
 * 接口 [查看作品↗](http://yapi.zswltec.com:3000/project/57/interface/api/16465) 的 **请求类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/show`
 * @更新时间 `2023-12-29 18:05:29`
 */
export interface SubstratumShowRequest {
    /**
     * 唯一标识
     */
    uuid: string;
    /**
     * 区分用户端:1 表示用户端
     */
    userOrManage?: string;
}
/**
 * 接口 [查看作品↗](http://yapi.zswltec.com:3000/project/57/interface/api/16465) 的 **返回类型**
 *
 * @分类 [基层动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3669)
 * @请求头 `GET /incorruptible/substratum/show`
 * @更新时间 `2023-12-29 18:05:29`
 */
export interface SubstratumShowResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: {
        id?: number;
        /**
         * 唯一标识
         */
        uuid?: string;
        /**
         * 标题
         */
        title?: string;
        /**
         * 封面图
         */
        surfacePicture?: string;
        /**
         * 排序
         */
        sort?: number;
        /**
         * 展示状态:0关闭 , 1打开
         */
        showStatus?: number;
        /**
         * 文章内容
         */
        articleContent?: string;
        /**
         * 创建时间
         */
        gmtCreate?: string;
        /**
         * 作者
         */
        userName?: string;
        /**
         * 任务是否包含：true 包含 ，false 不包含
         */
        taskIncluded?: string;
        /**
         * 截止时间
         */
        deadline?: string;
    };
}
