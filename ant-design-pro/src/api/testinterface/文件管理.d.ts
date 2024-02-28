/**
 * 接口 [下载文件测试↗](http://yapi.zswltec.com:3000/project/57/interface/api/15583) 的 **请求类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `GET /file/downLoad`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileDownLoadRequest {
    fileName: string;
}
/**
 * 接口 [下载文件测试↗](http://yapi.zswltec.com:3000/project/57/interface/api/15583) 的 **返回类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `GET /file/downLoad`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileDownLoadResponse {
}
/**
 * 接口 [\/file\/query↗](http://yapi.zswltec.com:3000/project/57/interface/api/15595) 的 **请求类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `POST /file/query`
 * @更新时间 `2023-11-14 11:48:43`
 */
export declare type FileQueryRequest = string[];
/**
 * 接口 [\/file\/query↗](http://yapi.zswltec.com:3000/project/57/interface/api/15595) 的 **返回类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `POST /file/query`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileQueryResponse {
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
        /**
         * 唯一key
         */
        key?: string;
        /**
         * 文件名称 例如： xx.jpg
         */
        fileName?: string;
        /**
         * 文件类型
         */
        fileType?: string;
        /**
         * 文件路径 例如：gungnir/2022/6/20
         */
        filePath?: string;
        /**
         * 上传时间
         */
        createTime?: string;
        /**
         * 上传人
         */
        createBy?: string;
    }[];
}
/**
 * 接口 [onlyoffice上传文件测试↗](http://yapi.zswltec.com:3000/project/57/interface/api/15577) 的 **请求类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `POST /file/uploadFiles`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileUploadFilesRequest {
    files: File;
}
/**
 * 接口 [onlyoffice上传文件测试↗](http://yapi.zswltec.com:3000/project/57/interface/api/15577) 的 **返回类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `POST /file/uploadFiles`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileUploadFilesResponse {
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
        /**
         * 唯一key
         */
        key?: string;
        /**
         * 文件名称 例如： xx.jpg
         */
        fileName?: string;
        /**
         * 文件类型
         */
        fileType?: string;
        /**
         * 文件路径 例如：gungnir/2022/6/20
         */
        filePath?: string;
        /**
         * 上传时间
         */
        createTime?: string;
        /**
         * 上传人
         */
        createBy?: string;
    }[];
}
/**
 * 接口 [上传文件测试↗](http://yapi.zswltec.com:3000/project/57/interface/api/15559) 的 **请求类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `POST /file/upload`
 * @更新时间 `2023-11-14 11:46:08`
 */
export interface FileUploadRequest {
    files: File;
}
/**
 * 接口 [上传文件测试↗](http://yapi.zswltec.com:3000/project/57/interface/api/15559) 的 **返回类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `POST /file/upload`
 * @更新时间 `2023-11-14 11:46:08`
 */
export interface FileUploadResponse {
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
        /**
         * 唯一key
         */
        key?: string;
        /**
         * 文件名称 例如： xx.jpg
         */
        fileName?: string;
        /**
         * 文件类型
         */
        fileType?: string;
        /**
         * 文件路径 例如：gungnir/2022/6/20
         */
        filePath?: string;
        /**
         * 上传时间
         */
        createTime?: string;
        /**
         * 上传人
         */
        createBy?: string;
    }[];
}
/**
 * 接口 [文件下载↗](http://yapi.zswltec.com:3000/project/57/interface/api/15565) 的 **请求类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `GET /file/file/download`
 * @更新时间 `2023-11-14 11:47:19`
 */
export interface FileDownloadRequest {
    uuid?: string;
}
/**
 * 接口 [文件下载↗](http://yapi.zswltec.com:3000/project/57/interface/api/15565) 的 **返回类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `GET /file/file/download`
 * @更新时间 `2023-11-14 11:47:19`
 */
export interface FileDownloadResponse {
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
    data?: string;
}
/**
 * 接口 [文件预览下载↗](http://yapi.zswltec.com:3000/project/57/interface/api/15589) 的 **请求类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `GET /file/downloadFile`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileDownloadFileRequest {
    uuid?: string;
}
/**
 * 接口 [文件预览下载↗](http://yapi.zswltec.com:3000/project/57/interface/api/15589) 的 **返回类型**
 *
 * @分类 [文件管理↗](http://yapi.zswltec.com:3000/project/57/interface/api/cat_3318)
 * @请求头 `GET /file/downloadFile`
 * @更新时间 `2023-11-14 11:48:43`
 */
export interface FileDownloadFileResponse {
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
