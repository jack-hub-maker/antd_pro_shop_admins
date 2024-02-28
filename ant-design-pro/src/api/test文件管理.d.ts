import * as Types from './interface/文件管理';
declare const _default: {
    getFileDownLoad(params: Types.FileDownLoadRequest, mock: Boolean): Promise<Types.FileDownLoadResponse>;
    postFileQuery(data: Types.FileQueryRequest, mock: Boolean): Promise<Types.FileQueryResponse>;
    postFileUploadFiles(data: Types.FileUploadFilesRequest, mock: Boolean): Promise<Types.FileUploadFilesResponse>;
    postFileUpload(data: Types.FileUploadRequest, mock: Boolean): Promise<Types.FileUploadResponse>;
    getFileDownload(params: Types.FileDownloadRequest, mock: Boolean): Promise<Types.FileDownloadResponse>;
    getFileDownloadFile(params: Types.FileDownloadFileRequest, mock: Boolean): Promise<Types.FileDownloadFileResponse>;
};
export default _default;
