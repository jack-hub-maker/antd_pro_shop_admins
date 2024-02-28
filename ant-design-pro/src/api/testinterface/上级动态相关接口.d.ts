/**
 * 接口 [上传文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16495) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `POST /incorruptible/superiors/add`
 * @更新时间 `2023-11-30 11:29:19`
 */
export interface SuperiorsAddRequest {
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
 * 接口 [上传文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16495) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `POST /incorruptible/superiors/add`
 * @更新时间 `2023-11-30 11:29:19`
 */
export interface SuperiorsAddResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [修改展示状态↗](http://yapi.zswltec.com:3000/project/57/interface/api/16507) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/updateStatus`
 * @更新时间 `2023-11-28 13:52:40`
 */
export interface SuperiorsUpdateStatusRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [修改展示状态↗](http://yapi.zswltec.com:3000/project/57/interface/api/16507) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/updateStatus`
 * @更新时间 `2023-11-28 13:52:40`
 */
export interface SuperiorsUpdateStatusResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [修改文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16513) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `PUT /incorruptible/superiors/update`
 * @更新时间 `2023-11-30 11:30:00`
 */
export interface SuperiorsUpdateRequest {
    id?: number;
    /**
     * 唯一标识
     */
    uuid: string;
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
 * 接口 [修改文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16513) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `PUT /incorruptible/superiors/update`
 * @更新时间 `2023-11-30 11:30:00`
 */
export interface SuperiorsUpdateResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [删除文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16477) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `DELETE /incorruptible/superiors/delete`
 * @更新时间 `2023-11-27 15:36:09`
 */
export interface SuperiorsDeleteRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [删除文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16477) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `DELETE /incorruptible/superiors/delete`
 * @更新时间 `2023-11-27 15:36:09`
 */
export interface SuperiorsDeleteResponse {
    success?: boolean;
    code?: number;
    message?: string;
    data?: null;
}
/**
 * 接口 [回显数据↗](http://yapi.zswltec.com:3000/project/57/interface/api/16489) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/findByUuid`
 * @更新时间 `2023-12-27 13:57:01`
 */
export interface SuperiorsFindByUuidRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [回显数据↗](http://yapi.zswltec.com:3000/project/57/interface/api/16489) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/findByUuid`
 * @更新时间 `2023-12-27 13:57:01`
 */
export interface SuperiorsFindByUuidResponse {
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
 * 接口 [文章列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/16501) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/list`
 * @更新时间 `2023-12-27 13:57:34`
 */
export interface SuperiorsListRequest {
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
 * 接口 [文章列表↗](http://yapi.zswltec.com:3000/project/57/interface/api/16501) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/list`
 * @更新时间 `2023-12-27 13:57:34`
 */
export interface SuperiorsListResponse {
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
             * 文章内容
             */
            articleContent?: string;
            /**
             * 排序（越大越靠前）
             */
            sort?: number;
            /**
             * 阅读人数
             */
            viewership?: number;
            /**
             * 点击量
             */
            watchNumber?: number;
            /**
             * 创建时间
             */
            gmtCreate?: string;
            /**
             * 展示状态:0关闭 , 1打开
             */
            showStatus?: number;
            /**
             * 审核状态
             */
            approvalStatus?: number;
            /**
             * 审核记录唯一标识
             */
            auditId?: string;
        }[];
        map?: {
            key?: {};
        };
    };
}
/**
 * 接口 [查看文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16483) 的 **请求类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/show`
 * @更新时间 `2023-12-29 18:05:49`
 */
export interface SuperiorsShowRequest {
    /**
     * 唯一标识
     */
    uuid: string;
}
/**
 * 接口 [查看文章↗](http://yapi.zswltec.com:3000/project/57/interface/api/16483) 的 **返回类型**
 *
 * @分类 [上级动态相关接口↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3678)
 * @请求头 `GET /incorruptible/superiors/show`
 * @更新时间 `2023-12-29 18:05:49`
 */
export interface SuperiorsShowResponse {
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
         * 作者
         */
        userName?: string;
        /**
         * 创建时间
         */
        gmtCreate?: string;
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
